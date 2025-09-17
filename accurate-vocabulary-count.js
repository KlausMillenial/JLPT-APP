const fs = require('fs');

console.log('🎯 ACCURATE VOCABULARY COUNT\n');

// Read and parse the vocabulary data directly
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Find the vocabularyData array
const arrayStartIndex = content.indexOf('export const vocabularyData: VocabularyWord[] = [');
const arrayEndIndex = content.lastIndexOf(']; // end of array') || content.lastIndexOf('];');

if (arrayStartIndex === -1 || arrayEndIndex === -1) {
    console.error('Could not find vocabulary array');
    process.exit(1);
}

const arrayContent = content.substring(arrayStartIndex, arrayEndIndex + 2);

// Count entries by counting opening braces that start entries
let entryCount = 0;
let inEntry = false;
let braceDepth = 0;
const lines = arrayContent.split('\n');

console.log('📊 Analyzing vocabulary structure...\n');

const japaneseWords = [];
let currentEntry = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip array declaration and empty lines
    if (line.includes('export const vocabularyData') || !line) continue;
    if (line === '];') break;
    
    // Track braces
    const openBraces = (line.match(/{/g) || []).length;
    const closeBraces = (line.match(/}/g) || []).length;
    
    // Start of new entry
    if (openBraces > 0 && braceDepth === 0) {
        entryCount++;
        inEntry = true;
        currentEntry = { id: null, japanese: null };
    }
    
    braceDepth += openBraces - closeBraces;
    
    // Extract id and japanese from main entry (not examples)
    if (inEntry && braceDepth === 1) {
        const idMatch = line.match(/id:\s*["']([^"']+)["']/);
        const japaneseMatch = line.match(/japanese:\s*["']([^"']+)["']/);
        
        if (idMatch) currentEntry.id = idMatch[1];
        if (japaneseMatch) currentEntry.japanese = japaneseMatch[1];
    }
    
    // End of entry
    if (braceDepth === 0 && inEntry) {
        inEntry = false;
        if (currentEntry.japanese) {
            japaneseWords.push(currentEntry.japanese);
        }
        currentEntry = null;
    }
}

console.log(`📈 RAW DATA ANALYSIS:`);
console.log(`- Total vocabulary entries: ${entryCount}`);
console.log(`- Japanese words extracted: ${japaneseWords.length}`);

// Check for duplicates in raw data
const wordCounts = {};
japaneseWords.forEach(word => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
});

const duplicateWords = Object.entries(wordCounts).filter(([word, count]) => count > 1);
const uniqueWordCount = Object.keys(wordCounts).length;

console.log(`\n🔍 DUPLICATE ANALYSIS:`);
console.log(`- Unique Japanese words: ${uniqueWordCount}`);
console.log(`- Duplicate words found: ${duplicateWords.length}`);

if (duplicateWords.length > 0) {
    console.log(`\n🚨 DUPLICATES IN RAW DATA:`);
    duplicateWords.slice(0, 10).forEach(([word, count]) => {
        console.log(`  - "${word}" appears ${count} times`);
    });
    if (duplicateWords.length > 10) {
        console.log(`  ... and ${duplicateWords.length - 10} more duplicates`);
    }
}

console.log(`\n🎯 SUMMARY:`);
console.log(`- Raw vocabulary entries: ${entryCount}`);
console.log(`- After deduplication: ${uniqueWordCount}`);
console.log(`- Duplicates that would be removed: ${entryCount - uniqueWordCount}`);

// The app should show the deduplicated count
console.log(`\n✅ The app should display: ${uniqueWordCount} unique words`);
console.log(`📱 User reports seeing: 660 words`);

if (uniqueWordCount !== 660) {
    console.log(`⚠️  Discrepancy detected! Expected ${uniqueWordCount}, but user sees 660`);
} else {
    console.log(`✅ Counts match perfectly!`);
}