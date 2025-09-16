import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { VocabularyWord } from '@/data/vocabulary';
import { VoiceButton } from './VoiceButton';
import { FuriganaText } from './FuriganaText';
import { KanjiPracticeModal } from './KanjiPracticeModal';
import BrowserImageService from '@/services/browserImageService';
import { RunwareImageService } from '@/services/runwareImageService';
import { HuggingFaceService } from '@/services/huggingFaceService';
import { PlaceholderImageService } from '@/services/placeholderImageService';
import { Image, Loader2, Wand2, PenTool } from 'lucide-react';
import { toast } from 'sonner';

type LanguageOption = 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

interface VocabularyCardProps {
  word: VocabularyWord;
  language: LanguageOption;
  imageProvider?: 'runware' | 'huggingface' | 'placeholder';
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

export const VocabularyCard = ({ word, language, imageProvider = 'placeholder' }: VocabularyCardProps) => {
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
    console.log('Generate image button clicked for word:', word.japanese);
    
    setIsGeneratingImage(true);
    
    try {
      // Create a context-aware prompt that describes the word visually
      const translation = word[language] || word.english;
      const prompt = createImagePrompt(word, translation);
      
      console.log('Generated prompt:', prompt);
      console.log('Using image provider:', imageProvider);
      
      let result;
      
      // Try the selected provider first
      if (imageProvider === 'runware' && RunwareImageService.getApiKey()) {
        console.log('Using Runware AI...');
        result = await RunwareImageService.generateImage({
          positivePrompt: prompt,
          width: 512,
          height: 512,
        });
        toast.success('Runware AI image generated!');
      } else if (imageProvider === 'huggingface' && HuggingFaceService.getStoredApiKey()) {
        console.log('Using Hugging Face...');
        const hfService = new HuggingFaceService();
        result = await hfService.generateImage({
          positivePrompt: prompt,
          width: 512,
          height: 512,
        });
        toast.success('Hugging Face image generated!');
      } else {
        // Fallback to placeholder service
        console.log('Using visual learning aid...');
        result = await PlaceholderImageService.generateImage({
          positivePrompt: prompt,
          width: 512,
          height: 512,
        });
        toast.success('Visual learning aid generated!');
      }
      
      console.log('Image generation result:', result);
      
      if (result.imageURL) {
        setGeneratedImageUrl(result.imageURL);
      } else {
        throw new Error('No image URL returned');
      }
    } catch (error) {
      console.error('Image generation failed:', error);
      
      // Fall back to visual aid if everything else fails
      try {
        console.log('Fallback to visual learning aid...');
        const translation = word[language] || word.english;
        const fallbackResult = await createFallbackImage(word, translation);
        setGeneratedImageUrl(fallbackResult.imageURL);
        toast.info('Generated simple visual aid');
      } catch (fallbackError) {
        console.error('Fallback image generation failed:', fallbackError);
        toast.error('Unable to generate any visual aid');
      }
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // Simple fallback image generator
  const createFallbackImage = (word: VocabularyWord, translation: string): Promise<{ imageURL: string }> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      
      canvas.width = 512;
      canvas.height = 512;
      
      // Simple gradient background
      const gradient = ctx.createLinearGradient(0, 0, 512, 512);
      gradient.addColorStop(0, '#f0f9ff');
      gradient.addColorStop(1, '#e0e7ff');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 512);
      
      // Add border
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, 510, 510);
      
      // Add text
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 48px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('📚', 256, 200);
      
      ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
      ctx.fillText(translation, 256, 280);
      
      ctx.font = '16px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText('Visual Learning Aid', 256, 320);
      
      const imageURL = canvas.toDataURL('image/png');
      resolve({ imageURL });
    });
  };

  // Auto-generate image only when card is flipped (not immediately)
  useEffect(() => {
    if (isFlipped && !generatedImageUrl && !isGeneratingImage) {
      generateImage();
    }
  }, [isFlipped]);

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
            {/* Image section - Half of the card */}
            <div className="h-48 relative overflow-hidden">
              {isGeneratingImage ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5">
                  <Loader2 className="w-12 h-12 animate-spin text-primary mb-3" />
                  <span className="text-sm text-muted-foreground">
                    {imageProvider === 'runware' ? 'Generating with Runware AI...' :
                     imageProvider === 'huggingface' ? 'Generating with Hugging Face...' :
                     'Generating visual aid...'}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">This may take a moment</span>
                </div>
              ) : generatedImageUrl ? (
                <img 
                  src={generatedImageUrl} 
                  alt={translation}
                  className="w-full h-full object-cover animate-fade-in"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5">
                  <Wand2 className="w-8 h-8 text-primary/60 mb-3" />
                  <span className="text-sm text-primary/60 text-center">
                    {imageProvider === 'runware' ? 'Runware AI image' :
                     imageProvider === 'huggingface' ? 'HuggingFace AI image' :
                     'Visual aid'} will generate<br />when you flip this card
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
                    <FuriganaText 
                      japanese={word.examples[0].japanese}
                      hiragana={word.examples[0].hiragana}
                      className="text-sm opacity-90"
                    />
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

            {/* Kanji Practice Button */}
            <div className="mt-4 flex justify-center">
              <KanjiPracticeModal word={word} language={language} />
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