const fs = require('fs');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');
const lines = content.split('\n');

let inVocabArray = false;
let entryCount = 0;
let braceDepth = 0;
let allWords = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  
  // Start tracking when we enter the vocabulary array
  if (trimmed.includes('export const vocabularyData: VocabularyWord[] = [')) {
    inVocabArray = true;
    continue;
  }
  
  // Stop when we exit the array
  if (inVocabArray && trimmed === '];') {
    break;
  }
  
  if (inVocabArray) {
    // Track brace depth to identify main entries
    const openBraces = (line.match(/{/g) || []).length;
    const closeBraces = (line.match(/}/g) || []).length;
    
    // When we see an opening brace at depth 0, it's a new main entry
    if (openBraces > 0 && braceDepth === 0) {
      entryCount++;
      
      // Look for the japanese field in the next few lines
      for (let j = i; j < Math.min(i + 10, lines.length); j++) {
        const nextLine = lines[j].trim();
        const japaneseMatch = nextLine.match(/japanese:\s*"([^"]+)"/);
        if (japaneseMatch) {
          allWords.push(japaneseMatch[1]);
          break;
        }
      }
    }
    
    braceDepth += openBraces - closeBraces;
  }
}

console.log(`\n=== VOCABULARY ANALYSIS ===`);
console.log(`Total main entries: ${entryCount}`);
console.log(`Japanese words extracted: ${allWords.length}`);

// Remove duplicates
const uniqueWords = [...new Set(allWords)];
console.log(`Unique Japanese words: ${uniqueWords.length}`);

if (allWords.length !== uniqueWords.length) {
  console.log(`Duplicates found: ${allWords.length - uniqueWords.length}`);
}

console.log(`\n=== ALL ${uniqueWords.length} JAPANESE WORDS ===\n`);

// Print all words
for (let i = 0; i < uniqueWords.length; i += 15) {
  const group = uniqueWords.slice(i, i + 15);
  console.log(group.join('、'));
}

console.log(`\n\nActual count: ${uniqueWords.length} vocabulary words`);
console.log(`Expected: 598 words`);
console.log(`Difference: ${598 - uniqueWords.length} words`);

// Save to file
fs.writeFileSync('actual-word-list.txt', uniqueWords.join('\n'));
console.log(`\nWord list saved to: actual-word-list.txt`);