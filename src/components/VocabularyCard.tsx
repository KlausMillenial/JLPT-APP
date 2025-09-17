import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VocabularyWord } from '@/data/vocabulary';
import { VoiceButton } from './VoiceButton';
import { LeonardoImageService } from '@/services/leonardoImageService';
import { Loader2, Wand2 } from 'lucide-react';
import { toast } from 'sonner';

type LanguageOption = 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

interface VocabularyCardProps {
  word: VocabularyWord;
  language: LanguageOption;
}

// Create specific visual representations for each vocabulary word
const createImagePrompt = (word: VocabularyWord, translation: string): string => {
  const japanese = word.japanese;
  const category = word.category.toLowerCase();
  
  // Create specific prompts based on the actual Japanese word
  const wordSpecificPrompts: Record<string, string> = {
    // Family
    '父': 'Portrait of a kind Japanese father in business attire, warm smile, professional photo style',
    'お父さん': 'Portrait of a kind Japanese father in business attire, warm smile, professional photo style',
    '母': 'Portrait of a caring Japanese mother, gentle expression, warm lighting, professional photo style',
    'お母さん': 'Portrait of a caring Japanese mother, gentle expression, warm lighting, professional photo style',
    '兄': 'Portrait of a young Japanese man, older brother, friendly smile, casual attire',
    '弟': 'Portrait of a younger Japanese man, friendly expression, casual clothing',
    '姉': 'Portrait of a young Japanese woman, older sister, kind smile, modern attire',
    '妹': 'Portrait of a younger Japanese woman, bright smile, casual modern clothing',
    
    // Food & Drink
    'お茶': 'Traditional Japanese green tea in ceramic cup, steam rising, tatami mat background',
    '茶': 'Traditional Japanese green tea in ceramic cup, steam rising, tatami mat background',
    '水': 'Clear glass of pure water with water droplets, clean white background',
    'ご飯': 'Bowl of perfectly cooked white Japanese rice, wooden table, traditional setting',
    '米': 'Bowl of perfectly cooked white Japanese rice, wooden table, traditional setting',
    '昼ご飯': 'Traditional Japanese bento box lunch, colorful vegetables, rice, protein',
    '朝ご飯': 'Traditional Japanese breakfast setup, rice, miso soup, grilled fish',
    '夜ご飯': 'Traditional Japanese dinner spread, multiple dishes, family style',
    
    // Body Parts
    'お腹': 'Medical illustration of human stomach and abdomen, educational diagram style',
    '腹': 'Medical illustration of human stomach and abdomen, educational diagram style',
    '手': 'Close-up photo of human hands, clean and well-lit, medical reference style',
    '足': 'Medical reference photo of human feet, clean white background',
    '頭': 'Profile silhouette of human head, medical illustration style',
    
    // Places
    'お手洗い': 'Clean modern Japanese bathroom interior, minimal design, well-lit',
    'トイレ': 'Clean modern Japanese bathroom interior, minimal design, well-lit',
    '家': 'Traditional Japanese house exterior, wooden architecture, garden view',
    '学校': 'Japanese school building exterior, modern architecture, blue sky',
    '駅': 'Japanese train station platform, clean and modern, commuters in background',
    
    // Time
    '昨日': 'Calendar page showing yesterday, torn page effect, time concept',
    '今日': 'Calendar showing today with circle marking, bright lighting',
    '明日': 'Calendar showing tomorrow with forward arrow, future concept',
    '年': 'Annual calendar display, showing 12 months, time passage concept',
    '月': 'Monthly calendar grid, clean design, organizational concept',
    '日': 'Single calendar day highlighted, daily planner concept',
    
    // People
    '人': 'Silhouette of a person walking, human figure, minimalist style',
    '男の人': 'Professional portrait of Japanese businessman, confident pose',
    '女の人': 'Professional portrait of Japanese businesswoman, confident pose',
    '子ども': 'Happy Japanese child playing, bright colorful clothing, joyful expression',
    '大人': 'Portrait of mature Japanese adult, professional attire, confident expression',
    
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
    '机': 'Traditional Japanese wooden desk, minimalist design',
    '椅子': 'Traditional Japanese chair, wooden construction, simple design',
  };
  
  // Check if we have a specific prompt for this Japanese word
  if (wordSpecificPrompts[japanese]) {
    return `${wordSpecificPrompts[japanese]}, high quality, professional photography, detailed, isolated on white background`;
  }
  
  // Fallback to translation-based prompts for words not in our specific list
  return `Professional photograph of ${translation}, high quality, detailed, educational purpose, clean white background, well-lit, realistic`;
};

export const VocabularyCard = ({ word, language }: VocabularyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(word.imageUrl || '');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't flip if clicking on buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  const generateImage = async () => {
    const apiKey = LeonardoImageService.getApiKey();
    if (!apiKey) {
      toast.error('Leonardo AI API key required for image generation');
      return;
    }

    console.log('Generate image button clicked for word:', word.japanese);
    
    setIsGeneratingImage(true);
    
    try {
      const translation = word[language] || word.english;
      const prompt = createImagePrompt(word, translation);
      
      console.log('Generated prompt:', prompt);
      console.log('Using Leonardo AI...');
      
      const result = await LeonardoImageService.generateImage({
        positivePrompt: prompt,
        width: 512,
        height: 512,
      });
      
      console.log('Image generation result:', result);
      
      if (result.imageURL) {
        setGeneratedImageUrl(result.imageURL);
        toast.success('Image generated successfully!');
      } else {
        throw new Error('No image URL returned');
      }
    } catch (error) {
      console.error('Leonardo AI image generation failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Image generation failed';
      toast.error(errorMessage);
    } finally {
      setIsGeneratingImage(false);
    }
  };


  // Only generate images on user interaction to avoid rate limits
  useEffect(() => {
    // Don't auto-generate images to avoid hitting Leonardo AI rate limits
  }, []);

  const translation = word[language] || word.english; // Fallback to English if translation not available
  const exampleTranslation = word.examples[0]?.[language] || word.examples[0]?.english; // Fallback to English if translation not available

  return (
    <div className="perspective-1000 w-full h-[500px]">
      <div 
        className={`card-flip cursor-pointer relative w-full h-full transition-smooth ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        {/* Front of card - Translation */}
        <Card className="card-front gradient-card shadow-card hover:shadow-card-hover transition-smooth p-0 border-0 overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Image section - Larger portion of the card */}
            <div className="h-64 relative overflow-hidden">
              {isGeneratingImage ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5">
                  <Loader2 className="w-12 h-12 animate-spin text-primary mb-3" />
                  <span className="text-sm text-muted-foreground">
                    Generating AI image...
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">Usually takes 15-30 seconds</span>
                </div>
              ) : generatedImageUrl ? (
                <img 
                  src={generatedImageUrl} 
                  alt={translation}
                  className="w-full h-full object-cover animate-fade-in min-h-full"
                />
              ) : word.imageUrl ? (
                <img 
                  src={word.imageUrl} 
                  alt={translation}
                  className="w-full h-full object-cover min-h-full"
                />
              ) : LeonardoImageService.getApiKey() ? (
                <div 
                  className="w-full h-full flex flex-col items-center justify-center bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors group"
                  onClick={(e) => {
                    e.stopPropagation();
                    generateImage();
                  }}
                >
                  <Wand2 className="w-8 h-8 text-primary/60 mb-3 group-hover:text-primary transition-colors" />
                  <span className="text-sm text-primary/60 text-center group-hover:text-primary transition-colors">
                    Click for AI image<br />
                    <span className="text-xs opacity-75">(~30 seconds)</span>
                  </span>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5">
                  <Wand2 className="w-8 h-8 text-primary/60 mb-3" />
                  <span className="text-sm text-primary/60 text-center">
                    Set up Leonardo AI<br />for image generation
                  </span>
                </div>
              )}
            </div>
            
            {/* Content section - Other half of the card */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header with badges */}
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  {word.level}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {word.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {word.wordType}
                </Badge>
              </div>
              
              {/* Translation content */}
              <div className="flex flex-col items-center justify-center text-center space-y-3 flex-1">
                <div className="flex items-center justify-center gap-3">
                  <h2 className="text-2xl font-bold text-primary">
                    {translation}
                  </h2>
                  <VoiceButton 
                    text={translation}
                    language={language}
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary/10"
                  />
                </div>
                
                {word.examples[0] && (
                  <div className="space-y-2 pt-2 border-t border-primary/20 w-full">
                    <p className="text-xs font-medium text-muted-foreground">Example:</p>
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-sm text-muted-foreground">
                        {exampleTranslation}
                      </p>
                      <VoiceButton 
                        text={exampleTranslation}
                        language={language}
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/10 opacity-70"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-2 text-xs text-muted-foreground text-center">
                Click to reveal Japanese
              </div>
            </div>
          </div>
        </Card>

        {/* Back of card - Japanese */}
        <Card className="card-back gradient-primary text-primary-foreground shadow-card p-6 border-0">
          <div className="flex flex-col h-full">
            
            {/* Japanese content */}
            <div className="flex flex-col items-center justify-center text-center space-y-3 flex-1">
              <div className="flex items-center justify-center">
                <h2 className="text-4xl font-bold mb-2">
                  {word.japanese}
                </h2>
              </div>
              <div className="flex items-center justify-center gap-3">
                <p className="text-xl text-white/90">
                  {word.hiragana}
                </p>
                <VoiceButton 
                  text={word.hiragana}
                  language="japanese"
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                />
              </div>
              <p className="text-lg text-white/75 italic">
                {word.romaji}
              </p>
              
              {word.examples[0] && (
                <div className="space-y-2 pt-4 border-t border-white/20 w-full">
                  <p className="text-sm font-medium">Example:</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-sm opacity-90">{word.examples[0].japanese}</p>
                    <VoiceButton 
                      text={word.examples[0].hiragana}
                      language="japanese"
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 opacity-70"
                    />
                  </div>
                  <p className="text-xs opacity-75 italic">
                    {word.examples[0].romaji}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-4 text-xs opacity-75 text-center">
              Click to see translation again
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};