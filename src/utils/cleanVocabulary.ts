import { vocabularyData, VocabularyWord } from '@/data/vocabulary';

// This utility will create a clean, deduplicated version of the vocabulary
export const createCleanVocabulary = (): VocabularyWord[] => {
  console.log('🧹 Creating clean vocabulary without duplicates...');
  
  const seenJapanese = new Set<string>();
  const seenIds = new Set<string>();
  const cleanVocabulary: VocabularyWord[] = [];
  let duplicatesRemoved = 0;

  vocabularyData.forEach((word, index) => {
    // Check if this Japanese word or ID has been seen before
    if (!seenJapanese.has(word.japanese) && !seenIds.has(word.id)) {
      seenJapanese.add(word.japanese);
      seenIds.add(word.id);
      cleanVocabulary.push(word);
    } else {
      duplicatesRemoved++;
      console.log(`🗑️ Removed duplicate ${index + 1}: ${word.japanese} (${word.id})`);
    }
  });

  console.log(`✅ Clean vocabulary created:`);
  console.log(`- Original entries: ${vocabularyData.length}`);
  console.log(`- Unique entries: ${cleanVocabulary.length}`);
  console.log(`- Duplicates removed: ${duplicatesRemoved}`);

  return cleanVocabulary;
};

// Export the clean vocabulary for use in components
export const cleanVocabularyData = createCleanVocabulary();