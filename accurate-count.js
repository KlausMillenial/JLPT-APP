const fs = require('fs');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find the vocabularyData array
const startMarker = 'export const vocabularyData: VocabularyWord[] = [';
const endMarker = '];';

const startIndex = content.indexOf(startMarker);
const endIndex = content.lastIndexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.log('Could not find vocabulary data boundaries');
  process.exit(1);
}

// Extract just the array content
const arrayContent = content.substring(startIndex + startMarker.length, endIndex);

// Split into individual entries by looking for objects
const entries = [];
let braceDepth = 0;
let currentEntry = '';
let inEntry = false;

for (let i = 0; i < arrayContent.length; i++) {
  const char = arrayContent[i];
  
  if (char === '{' && !inEntry) {
    inEntry = true;
    currentEntry = char;
    braceDepth = 1;
  } else if (inEntry) {
    currentEntry += char;
    
    if (char === '{') {
      braceDepth++;
    } else if (char === '}') {
      braceDepth--;
      
      if (braceDepth === 0) {
        // End of entry
        entries.push(currentEntry);
        currentEntry = '';
        inEntry = false;
      }
    }
  }
}

console.log(`Total vocabulary entries found: ${entries.length}`);

// Extract Japanese words from each entry
const japaneseWords = [];
const duplicateCheck = new Set();
const duplicates = [];

entries.forEach((entry, index) => {
  const japaneseMatch = entry.match(/japanese:\s*"([^"]+)"/);
  const idMatch = entry.match(/id:\s*"([^"]+)"/);
  
  if (japaneseMatch && idMatch) {
    const japanese = japaneseMatch[1];
    const id = idMatch[1];
    
    if (duplicateCheck.has(japanese)) {
      duplicates.push(`${japanese} (ID: ${id})`);
    } else {
      duplicateCheck.add(japanese);
      japaneseWords.push({
        index: index + 1,
        id: id,
        japanese: japanese
      });
    }
  }
});

console.log(`Unique Japanese words: ${japaneseWords.length}`);
console.log(`Duplicate words found: ${duplicates.length}`);

if (duplicates.length > 0) {
  console.log('\nDuplicates:');
  duplicates.forEach(dup => console.log(`- ${dup}`));
}

console.log('\n=== ALL JAPANESE VOCABULARY WORDS ===\n');

// Print just the Japanese words
const wordList = japaneseWords.map(w => w.japanese);
console.log(wordList.join('、'));

console.log(`\n\nFinal count: ${wordList.length} unique Japanese vocabulary words`);

// Save to file
fs.writeFileSync('all-japanese-words.txt', wordList.join('\n'));
console.log('Saved to: all-japanese-words.txt');

// Also create a detailed list with IDs
let detailedOutput = `=== COMPLETE VOCABULARY LIST (${japaneseWords.length} words) ===\n\n`;
japaneseWords.forEach(word => {
  detailedOutput += `${word.index}. ${word.japanese} (ID: ${word.id})\n`;
});

fs.writeFileSync('detailed-vocabulary-list.txt', detailedOutput);
console.log('Detailed list saved to: detailed-vocabulary-list.txt');