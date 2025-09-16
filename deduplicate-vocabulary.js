const fs = require('fs');

// Read the vocabulary file
const fileContent = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract the vocabulary data array using a more comprehensive approach
const startMarker = 'export const vocabularyData: VocabularyWord[] = [';
const endMarker = '];';

const startIndex = fileContent.indexOf(startMarker);
const endIndex = fileContent.indexOf(endMarker, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.log('Could not find vocabulary data boundaries');
  process.exit(1);
}

// Extract just the array content
const arrayContent = fileContent.substring(startIndex + startMarker.length, endIndex);

// Parse entries more carefully
const entries = [];
const duplicatesByJapanese = {};
const duplicatesById = {};
const seenJapanese = {};
const seenIds = {};

// Find all entries using regex
const entryPattern = /{\s*id:\s*"([^"]+)",\s*japanese:\s*"([^"]+)",[\s\S]*?}\s*(?=,\s*{|$)/g;
let match;

while ((match = entryPattern.exec(arrayContent)) !== null) {
  const id = match[1];
  const japanese = match[2];
  const fullEntry = match[0];
  
  const entry = { id, japanese, fullEntry };
  entries.push(entry);
  
  // Check for duplicate Japanese words
  if (seenJapanese[japanese]) {
    if (!duplicatesByJapanese[japanese]) {
      duplicatesByJapanese[japanese] = [seenJapanese[japanese]];
    }
    duplicatesByJapanese[japanese].push(entry);
  } else {
    seenJapanese[japanese] = entry;
  }
  
  // Check for duplicate IDs
  if (seenIds[id]) {
    if (!duplicatesById[id]) {
      duplicatesById[id] = [seenIds[id]];
    }
    duplicatesById[id].push(entry);
  } else {
    seenIds[id] = entry;
  }
}

console.log(`Total entries found: ${entries.length}`);
console.log(`Unique Japanese words: ${Object.keys(seenJapanese).length}`);
console.log(`Unique IDs: ${Object.keys(seenIds).length}`);

// Report duplicates by Japanese word
const japaneseDedupeCount = Object.keys(duplicatesByJapanese).length;
if (japaneseDedupeCount > 0) {
  console.log(`\nDuplicate Japanese words found: ${japaneseDedupeCount}`);
  Object.entries(duplicatesByJapanese).forEach(([japanese, duplicates]) => {
    console.log(`- "${japanese}": ${duplicates.map(d => d.id).join(', ')}`);
  });
}

// Report duplicates by ID
const idDedupeCount = Object.keys(duplicatesById).length;
if (idDedupeCount > 0) {
  console.log(`\nDuplicate IDs found: ${idDedupeCount}`);
  Object.entries(duplicatesById).forEach(([id, duplicates]) => {
    console.log(`- "${id}": appears ${duplicates.length} times`);
  });
}

// Create deduplicated array
const deduplicatedEntries = [];
const usedJapanese = new Set();
const usedIds = new Set();

entries.forEach(entry => {
  if (!usedJapanese.has(entry.japanese) && !usedIds.has(entry.id)) {
    deduplicatedEntries.push(entry);
    usedJapanese.add(entry.japanese);
    usedIds.add(entry.id);
  } else {
    console.log(`Removing duplicate: ${entry.id} (${entry.japanese})`);
  }
});

console.log(`\nAfter deduplication: ${deduplicatedEntries.length} entries`);
console.log(`Removed: ${entries.length - deduplicatedEntries.length} duplicate entries`);

// Write the deduplicated vocabulary file
const beforeData = fileContent.substring(0, startIndex + startMarker.length);
const afterData = fileContent.substring(endIndex);

const deduplicatedContent = deduplicatedEntries.map(entry => entry.fullEntry).join(',\n  ');

const newFileContent = beforeData + '\n  ' + deduplicatedContent + '\n' + afterData;

fs.writeFileSync('src/data/vocabulary.ts', newFileContent);
console.log('\nVocabulary file updated with deduplicated data');