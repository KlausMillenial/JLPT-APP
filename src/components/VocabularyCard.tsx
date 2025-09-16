import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { VocabularyWord } from '@/data/vocabulary';
import { VoiceButton } from './VoiceButton';
import { FuriganaText } from './FuriganaText';
import { KanjiPracticeModal } from './KanjiPracticeModal';
import { RunwareService } from '@/services/runwareService';
import { Image, Loader2, Wand2, PenTool } from 'lucide-react';
import { toast } from 'sonner';

type LanguageOption = 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

interface VocabularyCardProps {
  word: VocabularyWord;
  language: LanguageOption;
}

// Create context-aware image prompts for better visual representation
const createImagePrompt = (word: VocabularyWord, translation: string): string => {
  const category = word.category.toLowerCase();
  const wordType = word.wordType.toLowerCase();
  
  // Special handling for different categories and word types
  if (category === 'family') {
    if (translation.includes('father') || translation.includes('père')) {
      return 'Cartoon illustration of a friendly middle-aged man with a warm smile, father figure, simple clean style, bright colors, isolated on white background';
    }
    if (translation.includes('mother') || translation.includes('mère')) {
      return 'Cartoon illustration of a friendly middle-aged woman with a warm smile, mother figure, simple clean style, bright colors, isolated on white background';
    }
    if (translation.includes('brother') || translation.includes('frère')) {
      return 'Cartoon illustration of a young man, brother figure, friendly appearance, simple clean style, bright colors, isolated on white background';
    }
    if (translation.includes('sister') || translation.includes('sœur')) {
      return 'Cartoon illustration of a young woman, sister figure, friendly appearance, simple clean style, bright colors, isolated on white background';
    }
    if (translation.includes('grandmother') || translation.includes('grand-mère')) {
      return 'Cartoon illustration of a kind elderly woman with gray hair, grandmother figure, warm smile, simple clean style, bright colors, isolated on white background';
    }
    if (translation.includes('aunt') || translation.includes('tante')) {
      return 'Cartoon illustration of a friendly middle-aged woman, aunt figure, welcoming appearance, simple clean style, bright colors, isolated on white background';
    }
    // For other family terms
    return `Cartoon illustration of ${translation}, family member, friendly appearance, simple clean style, bright colors, isolated on white background`;
  }
  
  if (category === 'food') {
    if (translation.includes('tea') || translation.includes('thé')) {
      return 'Cartoon illustration of a traditional Japanese tea cup with green tea, steam rising, simple clean style, bright colors, isolated on white background';
    }
    if (translation.includes('lunch') || translation.includes('bento')) {
      return 'Cartoon illustration of a Japanese bento box with rice and colorful side dishes, simple clean style, bright colors, isolated on white background';
    }
    return `Cartoon illustration of ${translation}, Japanese cuisine style, appetizing and colorful, simple clean style, isolated on white background`;
  }
  
  if (category === 'body parts' || category === 'body') {
    if (translation.includes('stomach') || translation.includes('ventre')) {
      return 'Simple cartoon illustration of human stomach/belly area, anatomical diagram style for children, educational, bright colors, isolated on white background';
    }
    return `Simple cartoon illustration of ${translation}, anatomical diagram style for children, educational, bright colors, isolated on white background`;
  }
  
  if (category === 'place') {
    if (translation.includes('bathroom') || translation.includes('toilettes')) {
      return 'Cartoon illustration of a clean modern bathroom with toilet and sink, simple icon style, bright colors, isolated on white background';
    }
    return `Cartoon illustration of ${translation}, architectural view, simple clean style, bright colors, isolated on white background`;
  }
  
  if (category === 'people') {
    if (translation.includes('man') || translation.includes('homme')) {
      return 'Cartoon illustration of a friendly adult man, simple character design, bright colors, isolated on white background';
    }
    if (translation.includes('boy') || translation.includes('garçon')) {
      return 'Cartoon illustration of a happy young boy, child character, simple design, bright colors, isolated on white background';
    }
    if (translation.includes('adult') || translation.includes('adulte')) {
      return 'Cartoon illustration of a professional adult person, mature appearance, simple clean style, bright colors, isolated on white background';
    }
    return `Cartoon illustration of ${translation}, person character, friendly appearance, simple clean style, bright colors, isolated on white background`;
  }
  
  if (category === 'time') {
    if (translation.includes('yesterday') || translation.includes('hier')) {
      return 'Cartoon illustration of a calendar with yesterday marked, clock showing past time, simple icon style, bright colors, isolated on white background';
    }
    if (translation.includes('year') || translation.includes('année')) {
      return 'Cartoon illustration of a calendar showing past years, time concept, simple icon style, bright colors, isolated on white background';
    }
    return `Cartoon illustration representing ${translation}, time concept, clock or calendar elements, simple icon style, bright colors, isolated on white background`;
  }
  
  if (category === 'daily life') {
    if (translation.includes('bath') || translation.includes('bain')) {
      return 'Cartoon illustration of a traditional Japanese bathtub with steam, relaxing scene, simple clean style, bright colors, isolated on white background';
    }
    return `Cartoon illustration of ${translation}, daily activity scene, simple clean style, bright colors, isolated on white background`;
  }
  
  if (wordType === 'adjective' || category === 'adjective') {
    if (translation.includes('same') || translation.includes('même')) {
      return 'Cartoon illustration of two identical objects side by side, showing similarity concept, simple clean style, bright colors, isolated on white background';
    }
    return `Visual representation of ${translation}, concept illustration, simple and clear, bright colors, isolated on white background`;
  }
  
  // Default prompt for other words
  return `Clear, simple cartoon illustration of ${translation}, educational style for language learning, bright colors, easy to recognize, isolated on white background, detailed but not cluttered`;
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
    console.log('Generate image button clicked for word:', word.japanese);
    const apiKey = localStorage.getItem('runware-api-key');
    if (!apiKey) {
      console.log('No Runware API key found');
      toast.error('Please set up your Runware API key first');
      return;
    }

    console.log('Starting image generation with API key:', apiKey.substring(0, 10) + '...');
    setIsGeneratingImage(true);
    
    try {
      const runwareService = new RunwareService(apiKey);
      
      // Create a context-aware prompt that describes the word visually
      const translation = word[language] || word.english; // Fallback to English if translation not available
      const prompt = createImagePrompt(word, translation);
      
      console.log('Generated prompt:', prompt);
      
      const result = await runwareService.generateImage({
        positivePrompt: prompt,
        width: 512,
        height: 512,
        numberResults: 1,
        outputFormat: "WEBP"
      });
      
      console.log('Image generation result:', result);
      
      if (result.imageURL) {
        setGeneratedImageUrl(result.imageURL);
        toast.success('Image generated successfully!');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Failed to generate image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
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
            <div className="flex-1 relative">
              {isGeneratingImage ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5">
                  <Loader2 className="w-12 h-12 animate-spin text-primary mb-3" />
                  <span className="text-sm text-muted-foreground">Generating image...</span>
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
                  <span className="text-sm text-primary/60 text-center">Image will appear<br />automatically</span>
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