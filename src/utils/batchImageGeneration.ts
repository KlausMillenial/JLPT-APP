import { LeonardoImageService } from '@/services/leonardoImageService';
import { vocabularyData, VocabularyWord } from '@/data/vocabulary';
import { toast } from 'sonner';

// Create image prompt for vocabulary words (same logic as VocabularyCard)
const createImagePrompt = (word: VocabularyWord, translation: string): string => {
  const japanese = word.japanese;
  
  // Specific prompts for common Japanese words
  const wordSpecificPrompts: Record<string, string> = {
    // Family
    '父': 'Portrait of a kind Japanese father in business attire, warm smile, professional photo style',
    'お父さん': 'Portrait of a kind Japanese father in business attire, warm smile, professional photo style',
    '母': 'Portrait of a caring Japanese mother, gentle expression, warm lighting, professional photo style',
    'お母さん': 'Portrait of a caring Japanese mother, gentle expression, warm lighting, professional photo style',
    
    // Food & Drink
    'お茶': 'Traditional Japanese green tea in ceramic cup, steam rising, tatami mat background',
    '茶': 'Traditional Japanese green tea in ceramic cup, steam rising, tatami mat background',
    '水': 'Clear glass of pure water with water droplets, clean white background',
    'ご飯': 'Bowl of perfectly cooked white Japanese rice, wooden table, traditional setting',
    '米': 'Bowl of perfectly cooked white Japanese rice, wooden table, traditional setting',
    
    // Body Parts  
    'お腹': 'Medical illustration of human stomach and abdomen, educational diagram style',
    '手': 'Close-up photo of human hands, clean and well-lit, medical reference style',
    '足': 'Medical reference photo of human feet, clean white background',
    '頭': 'Profile silhouette of human head, medical illustration style',
    
    // Places
    'お手洗い': 'Clean modern Japanese bathroom interior, minimal design, well-lit',
    'トイレ': 'Clean modern Japanese bathroom interior, minimal design, well-lit',
    '家': 'Traditional Japanese house exterior, wooden architecture, garden view',
    '学校': 'Japanese school building exterior, modern architecture, blue sky',
    '駅': 'Japanese train station platform, clean and modern, commuters in background',
    
    // Actions/Verbs
    '食べる': 'Person eating traditional Japanese meal with chopsticks, dining scene',
    '飲む': 'Person drinking from traditional Japanese tea cup, peaceful moment',
    '見る': 'Close-up of human eye, detailed iris, looking/seeing concept',
    '聞く': 'Human ear in profile, listening concept, sound waves visualization',
    '話す': 'Person speaking, mouth in profile, communication concept',
    '書く': 'Hand holding brush writing Japanese calligraphy, traditional style',
    '読む': 'Person reading traditional Japanese book, focused expression',
    
    // Objects
    '本': 'Stack of Japanese books, traditional binding, scholarly atmosphere',
    '車': 'Modern Japanese car, clean design, city background',
    '電車': 'Japanese bullet train (shinkansen), speed and modern technology',
    '時計': 'Traditional Japanese wall clock, precise time display',
  };
  
  // Check if we have a specific prompt for this Japanese word
  if (wordSpecificPrompts[japanese]) {
    return `${wordSpecificPrompts[japanese]}, high quality, professional photography, detailed, isolated on white background`;
  }
  
  // Fallback to translation-based prompts
  return `Professional photograph of ${translation}, high quality, detailed, educational purpose, clean white background, well-lit, realistic`;
};

// Get the most important words to pre-generate (prioritize by frequency and level)
export const getPriorityWords = (): VocabularyWord[] => {
  // Priority order: N5 first (most common), then high-frequency categories
  const priorityCategories = [
    'Family', 'Food & Drink', 'Body Parts', 'Places', 'Time', 
    'People', 'Actions', 'Objects', 'Colors', 'Numbers'
  ];
  
  const priorityLevels = ['N5', 'N4', 'N3', 'N2', 'N1'];
  
  const sortedWords = [...vocabularyData].sort((a, b) => {
    // First sort by JLPT level (N5 = highest priority)
    const aLevelIndex = priorityLevels.indexOf(a.level);
    const bLevelIndex = priorityLevels.indexOf(b.level);
    
    if (aLevelIndex !== bLevelIndex) {
      return aLevelIndex - bLevelIndex;
    }
    
    // Then by category priority
    const aCategoryIndex = priorityCategories.indexOf(a.category);
    const bCategoryIndex = priorityCategories.indexOf(b.category);
    
    return (aCategoryIndex === -1 ? 999 : aCategoryIndex) - (bCategoryIndex === -1 ? 999 : bCategoryIndex);
  });
  
  // Return top 100 priority words
  return sortedWords.slice(0, 100);
};

// Batch image generation function
export const batchGenerateImages = async (
  words: VocabularyWord[],
  onProgress: (completed: number, total: number, currentWord: string) => void
): Promise<{ word: VocabularyWord; imageUrl: string | null }[]> => {
  const results: { word: VocabularyWord; imageUrl: string | null }[] = [];
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    onProgress(i, words.length, word.japanese);
    
    try {
      const prompt = createImagePrompt(word, word.english);
      
      const result = await LeonardoImageService.generateImage({
        positivePrompt: prompt,
        width: 512,
        height: 512,
      });
      
      results.push({
        word,
        imageUrl: result.imageURL
      });
      
      console.log(`Generated image for ${word.japanese}: ${result.imageURL}`);
      
      // Wait 3 seconds between requests to respect rate limits
      if (i < words.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
      
    } catch (error) {
      console.error(`Failed to generate image for ${word.japanese}:`, error);
      results.push({
        word,
        imageUrl: null
      });
    }
  }
  
  return results;
};

// Generate a JavaScript file with the image URLs to copy into vocabulary data
export const generateImageDataFile = (results: { word: VocabularyWord; imageUrl: string | null }[]): string => {
  const imageMap: Record<string, string> = {};
  
  results.forEach(({ word, imageUrl }) => {
    if (imageUrl) {
      imageMap[word.id] = imageUrl;
    }
  });
  
  return `// Generated image URLs - Copy these into your vocabulary.ts file
export const preGeneratedImages: Record<string, string> = ${JSON.stringify(imageMap, null, 2)};

// Usage: Add imageUrl: preGeneratedImages[word.id] to each vocabulary entry
`;
};