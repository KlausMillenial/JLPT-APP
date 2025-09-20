const fs = require('fs');

console.log('📊 Final vocabulary count after deduplication:\n');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract all Japanese words
const japanesePattern = /japanese:\s*["']([^"']+)["']/g;
const japaneseWords = [];
let match;

while ((match = japanesePattern.exec(content)) !== null) {
  japaneseWords.push(match[1]);
}

// Check for duplicates
const wordCounts = {};
japaneseWords.forEach(word => {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
});

const duplicates = Object.entries(wordCounts).filter(([word, count]) => count > 1);

console.log(`🎯 FINAL RESULTS:`);
console.log(`- Total vocabulary entries: ${japaneseWords.length}`);
console.log(`- Unique Japanese words: ${Object.keys(wordCounts).length}`);

if (duplicates.length > 0) {
  console.log(`\n⚠️  ${duplicates.length} duplicates still found:`);
  duplicates.forEach(([word, count]) => {
    console.log(`  - "${word}" appears ${count} times`);
  });
} else {
  console.log(`\n✅ Perfect! No duplicates found.`);
  console.log(`📚 Your vocabulary now contains ${Object.keys(wordCounts).length} unique Japanese words.`);
}