const fs = require('fs');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find vocabulary entries by looking for the pattern: id: "something", followed by japanese: "something"
const entryPattern = /id:\s*"([^"]+)",[\s\S]*?japanese:\s*"([^"]+)"/g;

const entries = [];
let match;

while ((match = entryPattern.exec(content)) !== null) {
  const id = match[1];
  const japanese = match[2];
  
  // Skip if this looks like an example sentence (they don't have IDs in our format)
  if (id && japanese) {
    entries.push({
      id: id,
      japanese: japanese
    });
  }
}

console.log(`\n=== EXACT VOCABULARY COUNT ===`);
console.log(`Total entries found: ${entries.length}`);

// Check for duplicates
const seenJapanese = new Set();
const seenIds = new Set();
const uniqueWords = [];
const duplicateWords = [];
const duplicateIds = [];

entries.forEach(entry => {
  if (seenJapanese.has(entry.japanese)) {
    duplicateWords.push(entry.japanese);
  } else {
    seenJapanese.add(entry.japanese);
  }
  
  if (seenIds.has(entry.id)) {
    duplicateIds.push(entry.id);
  } else {
    seenIds.add(entry.id);
    uniqueWords.push(entry.japanese);
  }
});

console.log(`Unique words: ${uniqueWords.length}`);
console.log(`Duplicate Japanese words: ${duplicateWords.length}`);
console.log(`Duplicate IDs: ${duplicateIds.length}`);

if (duplicateWords.length > 0) {
  console.log(`\nDuplicate Japanese words found:`);
  [...new Set(duplicateWords)].forEach(word => console.log(`- ${word}`));
}

if (duplicateIds.length > 0) {
  console.log(`\nDuplicate IDs found:`);
  [...new Set(duplicateIds)].forEach(id => console.log(`- ${id}`));
}

console.log(`\n=== ALL ${uniqueWords.length} VOCABULARY WORDS ===\n`);

// Print words in groups of 20 for better readability
for (let i = 0; i < uniqueWords.length; i += 20) {
  const group = uniqueWords.slice(i, i + 20);
  console.log(`${i + 1}-${Math.min(i + 20, uniqueWords.length)}: ${group.join('、')}`);
}

console.log(`\n\nFINAL COUNT: ${uniqueWords.length} unique vocabulary words`);

// Check against expected 598
if (uniqueWords.length !== 598) {
  console.log(`\n⚠️  Expected 598 words, found ${uniqueWords.length}`);
  if (uniqueWords.length < 598) {
    console.log(`   Missing: ${598 - uniqueWords.length} words`);
  } else {
    console.log(`   Extra: ${uniqueWords.length - 598} words`);
  }
}

// Save the complete list
fs.writeFileSync('final-word-list.txt', uniqueWords.join('\n'));
console.log(`\nSaved complete list to: final-word-list.txt`);