import { vocabularyData, VocabularyWord } from '@/data/vocabulary';

export const removeDuplicatesFromVocabulary = (): VocabularyWord[] => {
  const seenIds = new Set<string>();
  const seenJapanese = new Set<string>();
  const uniqueWords: VocabularyWord[] = [];
  const duplicates: string[] = [];

  vocabularyData.forEach((word) => {
    if (seenIds.has(word.id) || seenJapanese.has(word.japanese)) {
      duplicates.push(`${word.id} (${word.japanese})`);
      console.log(`Removing duplicate: ${word.id} (${word.japanese})`);
    } else {
      seenIds.add(word.id);
      seenJapanese.add(word.japanese);
      uniqueWords.push(word);
    }
  });

  console.log(`Removed ${duplicates.length} duplicates:`, duplicates);
  console.log(`Unique words: ${uniqueWords.length}`);
  
  return uniqueWords;
};

export const logVocabularyStats = () => {
  const seenIds = new Set();
  const seenJapanese = new Set();
  const duplicateIds = new Set();
  const duplicateJapanese = new Set();

  vocabularyData.forEach((word) => {
    if (seenIds.has(word.id)) {
      duplicateIds.add(word.id);
    } else {
      seenIds.add(word.id);
    }

    if (seenJapanese.has(word.japanese)) {
      duplicateJapanese.add(word.japanese);
    } else {
      seenJapanese.add(word.japanese);
    }
  });

  console.log('Vocabulary Statistics:');
  console.log('- Total entries:', vocabularyData.length);
  console.log('- Unique IDs:', seenIds.size);
  console.log('- Unique Japanese words:', seenJapanese.size);
  console.log('- Duplicate IDs:', Array.from(duplicateIds));
  console.log('- Duplicate Japanese words:', Array.from(duplicateJapanese));
};