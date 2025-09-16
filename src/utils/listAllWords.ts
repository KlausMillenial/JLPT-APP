import { vocabularyData } from '@/data/vocabulary';

export const getAllWordsList = () => {
  const words = vocabularyData.map((word, index) => ({
    index: index + 1,
    id: word.id,
    japanese: word.japanese,
    hiragana: word.hiragana,
    romaji: word.romaji,
    english: word.english,
    french: word.french,
    german: word.german,
    vietnamese: word.vietnamese,
    chinese: word.chinese,
    korean: word.korean,
    spanish: word.spanish,
    level: word.level,
    category: word.category,
    wordType: word.wordType
  }));

  return words;
};

export const logAllWords = () => {
  const words = getAllWordsList();
  
  console.log(`\n=== COMPLETE VOCABULARY LIST (${words.length} words) ===\n`);
  
  words.forEach((word) => {
    console.log(`${word.index}. ${word.japanese} (${word.hiragana}) - ${word.romaji}`);
    console.log(`   ID: ${word.id}`);
    console.log(`   English: ${word.english}`);
    console.log(`   French: ${word.french}`);
    if (word.german) console.log(`   German: ${word.german}`);
    if (word.vietnamese) console.log(`   Vietnamese: ${word.vietnamese}`);
    if (word.chinese) console.log(`   Chinese: ${word.chinese}`);
    if (word.korean) console.log(`   Korean: ${word.korean}`);
    if (word.spanish) console.log(`   Spanish: ${word.spanish}`);
    console.log(`   Level: ${word.level} | Category: ${word.category} | Type: ${word.wordType}`);
    console.log('');
  });

  return words;
};

export const getWordsByCategory = () => {
  const words = getAllWordsList();
  const categories = words.reduce((acc, word) => {
    if (!acc[word.category]) {
      acc[word.category] = [];
    }
    acc[word.category].push(word);
    return acc;
  }, {} as Record<string, typeof words>);

  return categories;
};

export const getWordsByLevel = () => {
  const words = getAllWordsList();
  const levels = words.reduce((acc, word) => {
    if (!acc[word.level]) {
      acc[word.level] = [];
    }
    acc[word.level].push(word);
    return acc;
  }, {} as Record<string, typeof words>);

  return levels;
};