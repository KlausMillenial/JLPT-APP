import { VocabularyWord } from '@/data/vocabulary';

export const applyVocabularyDeduplication = (vocabularyData: VocabularyWord[]): VocabularyWord[] => {
  console.log('🧹 Applying deduplication to vocabulary data...');
  
  const seenJapanese = new Set<string>();
  const seenIds = new Set<string>();
  const uniqueWords: VocabularyWord[] = [];
  let duplicatesCount = 0;

  vocabularyData.forEach((word) => {
    // Use Japanese word as primary key for uniqueness
    if (!seenJapanese.has(word.japanese) && !seenIds.has(word.id)) {
      seenJapanese.add(word.japanese);
      seenIds.add(word.id);
      uniqueWords.push(word);
    } else {
      duplicatesCount++;
      console.log(`🗑️ Removing duplicate: ${word.japanese} (${word.id})`);
    }
  });

  console.log(`✅ Deduplication complete:`);
  console.log(`- Original entries: ${vocabularyData.length}`);
  console.log(`- Unique entries: ${uniqueWords.length}`);
  console.log(`- Duplicates removed: ${duplicatesCount}`);

  return uniqueWords;
};