const fs = require('fs');

// Simple approach: extract all entries and check for duplicates
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find all id and japanese values
const idMatches = [...content.matchAll(/id:\s*"([^"]+)"/g)];
const japaneseMatches = [...content.matchAll(/japanese:\s*"([^"]+)"/g)];

console.log(`Total IDs: ${idMatches.length}`);
console.log(`Total Japanese: ${japaneseMatches.length}`);

// Check for duplicates in IDs
const ids = idMatches.map(m => m[1]);
const idCounts = {};
ids.forEach(id => {
  idCounts[id] = (idCounts[id] || 0) + 1;
});

const duplicateIds = Object.entries(idCounts).filter(([id, count]) => count > 1);
console.log(`Duplicate IDs: ${duplicateIds.length}`);
duplicateIds.forEach(([id, count]) => console.log(`  ${id}: ${count} times`));

// Check for duplicates in Japanese
const japaneseWords = japaneseMatches.map(m => m[1]);
const japaneseCounts = {};
japaneseWords.forEach(word => {
  japaneseCounts[word] = (japaneseCounts[word] || 0) + 1;
});

const duplicateJapanese = Object.entries(japaneseCounts).filter(([word, count]) => count > 1);
console.log(`Duplicate Japanese: ${duplicateJapanese.length}`);
duplicateJapanese.forEach(([word, count]) => console.log(`  ${word}: ${count} times`));

// If no duplicates found
if (duplicateIds.length === 0 && duplicateJapanese.length === 0) {
  console.log('\nNo duplicates found! The vocabulary is already clean.');
} else {
  console.log(`\nTotal duplicates found: ${duplicateIds.length + duplicateJapanese.length}`);
}