const fs = require('fs');

console.log('🔢 Counting vocabulary entries...\n');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Count entries by looking for "id:" patterns
const idMatches = content.match(/id:\s*["'][^"']+["']/g);
const totalEntries = idMatches ? idMatches.length : 0;

// Also count unique Japanese words
const japanesePattern = /japanese:\s*["']([^"']+)["']/g;
const japaneseWords = [];
let match;

while ((match = japanesePattern.exec(content)) !== null) {
  japaneseWords.push(match[1]);
}

const uniqueJapanese = new Set(japaneseWords);

console.log('📊 VOCABULARY STATISTICS:');
console.log(`- Total entries: ${totalEntries}`);
console.log(`- Total Japanese fields: ${japaneseWords.length}`);
console.log(`- Unique Japanese words: ${uniqueJapanese.size}`);

if (totalEntries !== japaneseWords.length) {
  console.log(`⚠️  Warning: Entry count mismatch (${totalEntries} IDs vs ${japaneseWords.length} Japanese words)`);
}

if (japaneseWords.length !== uniqueJapanese.size) {
  console.log(`⚠️  Warning: ${japaneseWords.length - uniqueJapanese.size} duplicate Japanese words still exist`);
} else {
  console.log('✅ No duplicate Japanese words detected');
}

console.log(`\n🎯 FINAL COUNT: ${uniqueJapanese.size} unique vocabulary words`);