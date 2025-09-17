const fs = require('fs');

console.log('🎯 EXACT DUPLICATE REMOVER');
console.log('Finding and removing entries with identical Japanese text...\n');

// Read the file
const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');

// Extract all japanese field values and their positions
const japanesePattern = /japanese:\s*["']([^"']+)["']/g;
const matches = [];
let match;

while ((match = japanesePattern.exec(content)) !== null) {
  matches.push({
    japanese: match[1],
    fullMatch: match[0],
    index: match.index,
    endIndex: match.index + match[0].length
  });
}

console.log(`📊 Found ${matches.length} Japanese entries`);

// Group by identical Japanese text
const groupedByJapanese = {};
matches.forEach((match, idx) => {
  if (!groupedByJapanese[match.japanese]) {
    groupedByJapanese[match.japanese] = [];
  }
  groupedByJapanese[match.japanese].push({...match, originalIndex: idx});
});

// Find exact duplicates (same Japanese text appearing multiple times)
const exactDuplicates = [];
Object.entries(groupedByJapanese).forEach(([japanese, occurrences]) => {
  if (occurrences.length > 1) {
    exactDuplicates.push({
      japanese,
      count: occurrences.length,
      occurrences
    });
  }
});

console.log(`🚨 Found ${exactDuplicates.length} Japanese words with exact duplicates:`);
exactDuplicates.forEach(dup => {
  console.log(`- "${dup.japanese}" appears ${dup.count} times`);
});

if (exactDuplicates.length === 0) {
  console.log('✅ No exact duplicates found!');
  process.exit(0);
}

// For each duplicate, we need to find the complete entry and remove all but the first
let modifiedContent = content;
let removedCount = 0;

// Process duplicates in reverse order to avoid index shifting
const allDuplicateOccurrences = [];
exactDuplicates.forEach(dup => {
  // Keep the first occurrence, mark others for removal
  for (let i = 1; i < dup.occurrences.length; i++) {
    allDuplicateOccurrences.push(dup.occurrences[i]);
  }
});

// Sort by index in reverse order
allDuplicateOccurrences.sort((a, b) => b.index - a.index);

console.log(`\n🗑️ Removing ${allDuplicateOccurrences.length} duplicate entries...`);

// For each duplicate occurrence, find and remove the complete entry
allDuplicateOccurrences.forEach(occurrence => {
  // Find the start of the entry (look backward for opening brace)
  let entryStart = occurrence.index;
  while (entryStart > 0 && modifiedContent[entryStart] !== '{') {
    entryStart--;
  }
  
  // Find the end of the entry (look forward for closing brace + comma)
  let entryEnd = occurrence.endIndex;
  let braceCount = 0;
  let foundStart = false;
  
  for (let i = entryStart; i < modifiedContent.length; i++) {
    if (modifiedContent[i] === '{') {
      braceCount++;
      foundStart = true;
    } else if (modifiedContent[i] === '}') {
      braceCount--;
      if (foundStart && braceCount === 0) {
        entryEnd = i + 1;
        // Include trailing comma if present
        if (modifiedContent[entryEnd] === ',') {
          entryEnd++;
        }
        // Include trailing whitespace/newlines
        while (entryEnd < modifiedContent.length && 
               (modifiedContent[entryEnd] === '\n' || modifiedContent[entryEnd] === ' ')) {
          entryEnd++;
        }
        break;
      }
    }
  }
  
  // Remove the entry
  const entryToRemove = modifiedContent.substring(entryStart, entryEnd);
  console.log(`- Removing entry for "${occurrence.japanese}"`);
  
  modifiedContent = modifiedContent.substring(0, entryStart) + 
                   modifiedContent.substring(entryEnd);
  removedCount++;
});

// Clean up any formatting issues
modifiedContent = modifiedContent.replace(/,\s*,/g, ','); // Remove double commas
modifiedContent = modifiedContent.replace(/,(\s*\n\s*)]/g, '$1]'); // Remove trailing comma before ]

// Write the cleaned file
fs.writeFileSync('src/data/vocabulary.ts', modifiedContent, 'utf8');

console.log(`\n✅ DEDUPLICATION COMPLETE!`);
console.log(`📈 Removed ${removedCount} exact duplicate entries`);
console.log(`📁 File updated: src/data/vocabulary.ts`);
