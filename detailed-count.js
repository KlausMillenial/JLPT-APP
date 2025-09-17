const fs = require('fs');

console.log('🔍 DETAILED VOCABULARY COUNT ANALYSIS\n');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Count actual vocabulary entries (not example sentences)
const entryPattern = /^\s*{\s*$/gm;
const entries = content.match(entryPattern);
console.log(`📊 Total object entries found: ${entries ? entries.length : 0}`);

// Count ID fields specifically
const idPattern = /id:\s*["']([^"']+)["']/g;
const idMatches = [...content.matchAll(idPattern)];
console.log(`🆔 Total ID fields found: ${idMatches.length}`);

// Count main vocabulary japanese fields (not in examples)
const lines = content.split('\n');
let vocabularyJapaneseCount = 0;
let exampleJapaneseCount = 0;
let inExamples = false;
let braceDepth = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Track brace depth
  braceDepth += (line.match(/{/g) || []).length;
  braceDepth -= (line.match(/}/g) || []).length;
  
  // Check if we're in examples array
  if (line.includes('examples:') || line.includes('"examples":')) {
    inExamples = true;
  }
  
  // If we hit a new entry (braceDepth back to 1), reset examples flag
  if (braceDepth === 1 && line.includes('id:')) {
    inExamples = false;
  }
  
  // Count japanese fields
  if (line.includes('japanese:') || line.includes('"japanese":')) {
    if (inExamples) {
      exampleJapaneseCount++;
    } else {
      vocabularyJapaneseCount++;
    }
  }
}

console.log(`📝 Main vocabulary japanese fields: ${vocabularyJapaneseCount}`);
console.log(`📄 Example japanese fields: ${exampleJapaneseCount}`);
console.log(`📋 Total japanese fields: ${vocabularyJapaneseCount + exampleJapaneseCount}`);

// Extract actual vocabulary words to check for duplicates
const mainJapanesePattern = /(?:^|\n)\s*(?:"japanese":\s*|japanese:\s*)["']([^"']+)["']/g;
const mainWords = [];
let match;

// Only get the main japanese fields, not examples
const vocabularySection = content.substring(
  content.indexOf('export const vocabularyData'),
  content.lastIndexOf('];')
);

const entryRegex = /{\s*(?:[^{}]|{[^}]*})*}/gs;
const vocabularyEntries = vocabularySection.match(entryRegex) || [];

console.log(`\n🎯 VOCABULARY ENTRIES ANALYSIS:`);
console.log(`- Raw entries found: ${vocabularyEntries.length}`);

vocabularyEntries.forEach((entry, index) => {
  const japaneseMatch = entry.match(/(?:^|\n|\s)(?:"japanese":\s*|japanese:\s*)["']([^"']+)["']/);
  if (japaneseMatch) {
    mainWords.push(japaneseMatch[1]);
  }
});

console.log(`- Japanese words extracted: ${mainWords.length}`);

// Check for duplicates
const wordCounts = {};
mainWords.forEach(word => {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
});

const duplicates = Object.entries(wordCounts).filter(([word, count]) => count > 1);
const uniqueWords = Object.keys(wordCounts).length;

console.log(`\n📈 FINAL STATISTICS:`);
console.log(`- Total vocabulary entries: ${mainWords.length}`);
console.log(`- Unique Japanese words: ${uniqueWords}`);
console.log(`- Duplicate words: ${duplicates.length}`);

if (duplicates.length > 0) {
  console.log(`\n🚨 DUPLICATES STILL FOUND:`);
  duplicates.forEach(([word, count]) => {
    console.log(`  - "${word}" appears ${count} times`);
  });
} else {
  console.log(`\n✅ No duplicates found!`);
}

console.log(`\n🎯 The app should be showing: ${uniqueWords} unique words`);