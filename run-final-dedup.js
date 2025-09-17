const fs = require('fs');

console.log('🧹 FINAL DEDUPLICATION: Removing all duplicate vocabulary entries...\n');

try {
  // Read vocabulary file
  const content = fs.readFileSync('src/data/vocabulary.ts', 'utf8');
  
  // Find array boundaries
  const arrayStart = content.indexOf('export const vocabularyData: VocabularyWord[] = [');
  const openBrace = content.indexOf('[', arrayStart);
  const closeBrace = content.lastIndexOf('];');
  
  const beforeArray = content.substring(0, openBrace + 1);
  const afterArray = content.substring(closeBrace);
  const arrayContent = content.substring(openBrace + 1, closeBrace);
  
  console.log('📖 Parsing vocabulary entries...');
  
  // More robust entry parsing
  const entries = [];
  let current = '';
  let depth = 0;
  let inString = false;
  let stringDelim = '';
  
  for (let i = 0; i < arrayContent.length; i++) {
    const char = arrayContent[i];
    const prev = i > 0 ? arrayContent[i - 1] : '';
    
    current += char;
    
    // Handle strings
    if ((char === '"' || char === "'") && prev !== '\\') {
      if (!inString) {
        inString = true;
        stringDelim = char;
      } else if (char === stringDelim) {
        inString = false;
        stringDelim = '';
      }
    }
    
    // Track object depth
    if (!inString) {
      if (char === '{') depth++;
      else if (char === '}') depth--;
      
      // Complete entry found
      if (depth === 0 && current.trim() && char === '}') {
        let entry = current.trim();
        // Remove trailing comma if present
        if (entry.endsWith(',')) {
          entry = entry.slice(0, -1);
        }
        entries.push(entry);
        current = '';
      }
    }
  }
  
  console.log(`📊 Parsed ${entries.length} entries`);
  
  // Extract metadata and deduplicate
  const processed = entries.map(entry => {
    const idMatch = entry.match(/id:\s*["']([^"']+)["]/);
    const japMatch = entry.match(/japanese:\s*["']([^"']+)["]/);
    return {
      entry,
      id: idMatch ? idMatch[1] : null,
      japanese: japMatch ? japMatch[1] : null
    };
  }).filter(item => item.id && item.japanese);
  
  // Deduplicate by Japanese word (keep first occurrence)
  const seenJapanese = new Set();
  const seenIds = new Set();
  const unique = [];
  let duplicates = 0;
  
  processed.forEach(item => {
    if (!seenJapanese.has(item.japanese) && !seenIds.has(item.id)) {
      seenJapanese.add(item.japanese);
      seenIds.add(item.id);
      unique.push(item.entry);
    } else {
      duplicates++;
      console.log(`🗑️  Removed duplicate: ${item.japanese} (ID: ${item.id})`);
    }
  });
  
  // Rebuild file
  const newArray = unique.join(',\n  ');
  const newContent = beforeArray + '\n  ' + newArray + '\n' + afterArray;
  
  // Save
  fs.writeFileSync('src/data/vocabulary.ts', newContent, 'utf8');
  
  console.log(`\n✅ DEDUPLICATION COMPLETE!`);
  console.log(`- Original entries: ${entries.length}`);
  console.log(`- Unique entries kept: ${unique.length}`);
  console.log(`- Duplicates removed: ${duplicates}`);
  
  // Final verification
  const final = fs.readFileSync('src/data/vocabulary.ts', 'utf8');
  const japaneseWords = [...final.matchAll(/japanese:\s*["']([^"']+)["]/g)];
  const ids = [...final.matchAll(/id:\s*["']([^"']+)["]/g)];
  
  const uniqueJap = new Set(japaneseWords.map(m => m[1]));
  const uniqueIds = new Set(ids.map(m => m[1]));
  
  console.log(`\n📈 Final verification:`);
  console.log(`- Japanese entries: ${japaneseWords.length}`);
  console.log(`- Unique Japanese: ${uniqueJap.size}`);
  console.log(`- ID entries: ${ids.length}`);
  console.log(`- Unique IDs: ${uniqueIds.size}`);
  
  if (japaneseWords.length === uniqueJap.size && ids.length === uniqueIds.size) {
    console.log(`\n🎉 SUCCESS: All ${unique.length} vocabulary entries are now unique!`);
  } else {
    console.log('\n⚠️  Warning: Some duplicates may still remain');
  }
  
} catch (error) {
  console.error('❌ Error during deduplication:', error);
}
