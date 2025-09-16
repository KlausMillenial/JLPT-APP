const fs = require('fs');

// Read the vocabulary file
const fileContent = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract the vocabulary data array
const vocabularyMatch = fileContent.match(/export const vocabularyData: VocabularyWord\[\] = \[([\s\S]*?)\];/);
if (!vocabularyMatch) {
  console.log('Could not find vocabulary data');
  process.exit(1);
}

// Parse the entries
const entries = [];
const duplicates = [];
const seen = new Set();

// Simple regex to find entries
const entryMatches = fileContent.matchAll(/{\s*id:\s*"([^"]+)",\s*japanese:\s*"([^"]+)",/g);

for (const match of entryMatches) {
  const id = match[1];
  const japanese = match[2];
  
  if (seen.has(japanese)) {
    duplicates.push({ id, japanese });
  } else {
    seen.add(japanese);
  }
  
  entries.push({ id, japanese });
}

console.log(`Total entries: ${entries.length}`);
console.log(`Unique Japanese words: ${seen.size}`);
console.log(`Duplicates found: ${duplicates.length}`);

if (duplicates.length > 0) {
  console.log('\nDuplicate words:');
  duplicates.forEach(dup => {
    console.log(`- ${dup.japanese} (ID: ${dup.id})`);
  });
}

// Find which specific IDs are duplicated
const idCounts = {};
entries.forEach(entry => {
  if (idCounts[entry.japanese]) {
    idCounts[entry.japanese].push(entry.id);
  } else {
    idCounts[entry.japanese] = [entry.id];
  }
});

console.log('\nDuplicated entries with their IDs:');
Object.entries(idCounts).forEach(([japanese, ids]) => {
  if (ids.length > 1) {
    console.log(`${japanese}: ${ids.join(', ')}`);
  }
});