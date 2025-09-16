const fs = require('fs');

console.log('Analyzing vocabulary for duplicates...');

// Read the vocabulary file
const fileContent = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract all vocabulary entries using regex
const idPattern = /id:\s*"([^"]+)"/g;
const japanesePattern = /japanese:\s*"([^"]+)"/g;

const ids = [];
const japaneseWords = [];

let idMatch;
while ((idMatch = idPattern.exec(fileContent)) !== null) {
  ids.push(idMatch[1]);
}

let japaneseMatch;
while ((japaneseMatch = japanesePattern.exec(fileContent)) !== null) {
  japaneseWords.push(japaneseMatch[1]);
}

console.log(`Total IDs found: ${ids.length}`);
console.log(`Total Japanese words found: ${japaneseWords.length}`);

// Find duplicate IDs
const idCounts = {};
const duplicateIds = [];
ids.forEach(id => {
  if (idCounts[id]) {
    idCounts[id]++;
    if (idCounts[id] === 2) { // First time we see it as duplicate
      duplicateIds.push(id);
    }
  } else {
    idCounts[id] = 1;
  }
});

// Find duplicate Japanese words
const japaneseCounts = {};
const duplicateJapanese = [];
japaneseWords.forEach(word => {
  if (japaneseCounts[word]) {
    japaneseCounts[word]++;
    if (japaneseCounts[word] === 2) { // First time we see it as duplicate
      duplicateJapanese.push(word);
    }
  } else {
    japaneseCounts[word] = 1;
  }
});

console.log(`\nDuplicate IDs (${duplicateIds.length}):`);
duplicateIds.forEach(id => {
  console.log(`- "${id}" appears ${idCounts[id]} times`);
});

console.log(`\nDuplicate Japanese words (${duplicateJapanese.length}):`);
duplicateJapanese.forEach(word => {
  console.log(`- "${word}" appears ${japaneseCounts[word]} times`);
});

// Save analysis to file
const analysis = {
  totalIds: ids.length,
  totalJapanese: japaneseWords.length,
  uniqueIds: Object.keys(idCounts).length,
  uniqueJapanese: Object.keys(japaneseCounts).length,
  duplicateIds: duplicateIds.map(id => ({ id, count: idCounts[id] })),
  duplicateJapanese: duplicateJapanese.map(word => ({ word, count: japaneseCounts[word] }))
};

fs.writeFileSync('vocabulary-analysis.json', JSON.stringify(analysis, null, 2));
console.log('\nAnalysis saved to vocabulary-analysis.json');

// Quick sample of entries for verification
console.log('\nFirst 10 IDs:', ids.slice(0, 10));
console.log('First 10 Japanese words:', japaneseWords.slice(0, 10));