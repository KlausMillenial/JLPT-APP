const fs = require('fs');

// Read the vocabulary file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract all vocabulary entries
const words = [];
let currentWord = null;

// Split content into lines
const lines = content.split('\n');

lines.forEach((line, index) => {
  const trimmedLine = line.trim();
  
  // Look for id field to start a new word
  const idMatch = trimmedLine.match(/id:\s*"([^"]+)"/);
  if (idMatch) {
    if (currentWord) {
      words.push(currentWord);
    }
    currentWord = { id: idMatch[1] };
  }
  
  // Extract other fields
  if (currentWord) {
    const japaneseMatch = trimmedLine.match(/japanese:\s*"([^"]+)"/);
    if (japaneseMatch) currentWord.japanese = japaneseMatch[1];
    
    const hiraganaMatch = trimmedLine.match(/hiragana:\s*"([^"]+)"/);
    if (hiraganaMatch) currentWord.hiragana = hiraganaMatch[1];
    
    const romajiMatch = trimmedLine.match(/romaji:\s*"([^"]+)"/);
    if (romajiMatch) currentWord.romaji = romajiMatch[1];
    
    const englishMatch = trimmedLine.match(/english:\s*"([^"]+)"/);
    if (englishMatch) currentWord.english = englishMatch[1];
    
    const levelMatch = trimmedLine.match(/level:\s*"([^"]+)"/);
    if (levelMatch) currentWord.level = levelMatch[1];
    
    const categoryMatch = trimmedLine.match(/category:\s*"([^"]+)"/);
    if (categoryMatch) currentWord.category = categoryMatch[1];
  }
});

// Don't forget the last word
if (currentWord) {
  words.push(currentWord);
}

// Clean up incomplete entries
const completeWords = words.filter(word => 
  word.id && word.japanese && word.hiragana && word.romaji && word.english
);

console.log(`\n=== COMPLETE JLPT VOCABULARY DATABASE (${completeWords.length} Words) ===\n`);

// Count by level
const levelCounts = {};
completeWords.forEach(word => {
  levelCounts[word.level] = (levelCounts[word.level] || 0) + 1;
});

console.log("BREAKDOWN BY JLPT LEVEL:");
Object.entries(levelCounts)
  .sort(([a], [b]) => a.localeCompare(b))
  .forEach(([level, count]) => {
    console.log(`${level}: ${count} words`);
  });

// Count by category
const categoryCounts = {};
completeWords.forEach(word => {
  if (word.category) {
    categoryCounts[word.category] = (categoryCounts[word.category] || 0) + 1;
  }
});

console.log("\nBREAKDOWN BY CATEGORY:");
Object.entries(categoryCounts)
  .sort(([a], [b]) => a.localeCompare(b))
  .forEach(([category, count]) => {
    console.log(`${category}: ${count} words`);
  });

console.log("\n" + "=".repeat(80));
console.log("COMPLETE ALPHABETICAL WORD LIST:");
console.log("=".repeat(80) + "\n");

// Print all words
completeWords.forEach((word, index) => {
  const number = String(index + 1).padStart(3, ' ');
  const japanese = word.japanese.padEnd(8, ' ');
  const hiragana = word.hiragana.padEnd(12, ' ');
  const romaji = word.romaji.padEnd(15, ' ');
  const english = word.english.padEnd(25, ' ');
  const level = (word.level || 'N/A').padEnd(3, ' ');
  const category = word.category || 'N/A';
  
  console.log(`${number}. ${japanese} (${hiragana}) ${romaji} "${english}" [${level}] [${category}]`);
});

console.log(`\n\nTotal: ${completeWords.length} vocabulary words extracted.\n`);

// Also save to a text file
let output = `=== COMPLETE JLPT VOCABULARY DATABASE (${completeWords.length} Words) ===\n\n`;

output += "BREAKDOWN BY JLPT LEVEL:\n";
Object.entries(levelCounts)
  .sort(([a], [b]) => a.localeCompare(b))
  .forEach(([level, count]) => {
    output += `${level}: ${count} words\n`;
  });

output += "\nBREAKDOWN BY CATEGORY:\n";
Object.entries(categoryCounts)
  .sort(([a], [b]) => a.localeCompare(b))
  .forEach(([category, count]) => {
    output += `${category}: ${count} words\n`;
  });

output += "\n" + "=".repeat(80) + "\n";
output += "COMPLETE ALPHABETICAL WORD LIST:\n";
output += "=".repeat(80) + "\n\n";

completeWords.forEach((word, index) => {
  const number = String(index + 1).padStart(3, ' ');
  const japanese = word.japanese.padEnd(8, ' ');
  const hiragana = word.hiragana.padEnd(12, ' ');
  const romaji = word.romaji.padEnd(15, ' ');
  const english = word.english.padEnd(25, ' ');
  const level = (word.level || 'N/A').padEnd(3, ' ');
  const category = word.category || 'N/A';
  
  output += `${number}. ${japanese} (${hiragana}) ${romaji} "${english}" [${level}] [${category}]\n`;
});

fs.writeFileSync('complete-vocabulary-list.txt', output);
console.log('Complete word list saved to: complete-vocabulary-list.txt');