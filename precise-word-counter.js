const fs = require('fs');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');
const lines = content.split('\n');

// Count actual vocabulary entries (exclude interface definition)
let entryCount = 0;
let inVocabularyArray = false;
const allWords = [];
const seenWords = new Set();
const duplicates = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Start counting after we see the vocabulary array
  if (line.includes('export const vocabularyData: VocabularyWord[] = [')) {
    inVocabularyArray = true;
    continue;
  }
  
  // Stop counting when we reach the end
  if (inVocabularyArray && line === '];') {
    break;
  }
  
  // Count entries that have id: field
  if (inVocabularyArray && line.match(/^id:\s*"[^"]+",?\s*$/)) {
    entryCount++;
    
    // Also extract the japanese word from following lines
    let j = i + 1;
    while (j < lines.length) {
      const nextLine = lines[j].trim();
      const japaneseMatch = nextLine.match(/^japanese:\s*"([^"]+)",?\s*$/);
      if (japaneseMatch) {
        const japanese = japaneseMatch[1];
        if (seenWords.has(japanese)) {
          duplicates.push(japanese);
        } else {
          seenWords.add(japanese);
          allWords.push(japanese);
        }
        break;
      }
      j++;
      if (j > i + 10) break; // Don't search too far
    }
  }
}

console.log(`\n=== VOCABULARY COUNT ANALYSIS ===`);
console.log(`Total vocabulary entries found: ${entryCount}`);
console.log(`Unique Japanese words extracted: ${allWords.length}`);
console.log(`Duplicate words found: ${duplicates.length}`);

if (duplicates.length > 0) {
  console.log(`\nDuplicate words:`);
  duplicates.forEach(word => console.log(`- ${word}`));
}

console.log(`\n=== ALL ${allWords.length} JAPANESE WORDS ===\n`);

// Print all words in groups of 10 for readability
for (let i = 0; i < allWords.length; i += 10) {
  const group = allWords.slice(i, i + 10);
  console.log(group.join('、'));
}

// Save complete list
fs.writeFileSync('complete-word-list.txt', allWords.join('\n'));
console.log(`\n\nComplete word list saved to: complete-word-list.txt`);
console.log(`Final count: ${allWords.length} unique vocabulary words`);

// If we expect 598 words, show what might be missing
const expectedCount = 598;
if (allWords.length < expectedCount) {
  console.log(`\n⚠️  MISSING WORDS: Expected ${expectedCount}, found ${allWords.length}`);
  console.log(`   Missing: ${expectedCount - allWords.length} words`);
}