const fs = require('fs');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract all Japanese words
const words = [];
const lines = content.split('\n');

lines.forEach(line => {
  const trimmedLine = line.trim();
  const japaneseMatch = trimmedLine.match(/japanese:\s*"([^"]+)"/);
  if (japaneseMatch) {
    words.push(japaneseMatch[1]);
  }
});

// Remove duplicates and sort
const uniqueWords = [...new Set(words)];

console.log(`\n=== ALL ${uniqueWords.length} JAPANESE VOCABULARY WORDS ===\n`);

// Print all words, 10 per line for better readability
for (let i = 0; i < uniqueWords.length; i += 10) {
  const row = uniqueWords.slice(i, i + 10).join('、');
  console.log(row + (i + 10 < uniqueWords.length ? '、' : ''));
}

console.log(`\n\nTotal: ${uniqueWords.length} unique Japanese words\n`);

// Also save as simple list
let output = uniqueWords.join('\n');
fs.writeFileSync('japanese-words-only.txt', output);
console.log('Japanese words saved to: japanese-words-only.txt');

// Print as comma-separated list too
console.log('\n=== COMMA-SEPARATED FORMAT ===\n');
console.log(uniqueWords.join('、'));