import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { VocabularyWord } from '@/data/vocabulary';
import { VoiceButton } from './VoiceButton';
import { RunwareService } from '@/services/runwareService';
import { Image, Loader2, Wand2 } from 'lucide-react';
import { toast } from 'sonner';

interface VocabularyCardProps {
  word: VocabularyWord;
  language: 'english' | 'french';
}

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
    const apiKey = localStorage.getItem('runware-api-key');
    if (!apiKey) {
      toast.error('Please set up your Runware API key first');
      return;
    }

    setIsGeneratingImage(true);
    
    try {
      const runwareService = new RunwareService(apiKey);
      
      // Create a prompt that describes the word visually
      const translation = language === 'english' ? word.english : word.french;
      const prompt = `A simple, clean illustration of ${translation}, suitable for language learning, minimalist style, on white background, high quality`;
      
      const result = await runwareService.generateImage({
        positivePrompt: prompt,
        width: 512,
        height: 512,
        numberResults: 1,
        outputFormat: "WEBP"
      });
      
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

  const translation = language === 'english' ? word.english : word.french;
  const exampleTranslation = language === 'english' ? word.examples[0]?.english : word.examples[0]?.french;

  return (
    <div className="perspective-1000 w-full h-96">
      <div 
        className={`card-flip cursor-pointer relative w-full h-full transition-smooth ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        {/* Front of card - Japanese */}
        <Card className="card-front gradient-card shadow-card hover:shadow-card-hover transition-smooth p-6 border-0">
          <div className="flex flex-col h-full">
            {/* Header with badges */}
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary" className="text-xs">
                {word.level}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {word.category}
              </Badge>
            </div>
            
            {/* Image section */}
            {generatedImageUrl ? (
              <div className="mb-4 flex justify-center">
                <img 
                  src={generatedImageUrl} 
                  alt={translation}
                  className="w-20 h-20 object-cover rounded-lg border-2 border-border/50"
                />
              </div>
            ) : (
              <div className="mb-4 flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={generateImage}
                  disabled={isGeneratingImage}
                  className="w-20 h-20 flex flex-col items-center justify-center gap-1 text-xs"
                >
                  {isGeneratingImage ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4" />
                      <span>Image</span>
                    </>
                  )}
                </Button>
              </div>
            )}
            
            {/* Japanese content */}
            <div className="flex flex-col items-center justify-center text-center space-y-3 flex-1">
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {word.japanese}
                </h2>
                <VoiceButton 
                  text={word.japanese}
                  language="japanese"
                  variant="outline"
                  size="icon"
                  className="mb-2"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-lg text-muted-foreground">
                  {word.hiragana}
                </p>
                <VoiceButton 
                  text={word.hiragana}
                  language="japanese"
                  size="icon"
                  className="opacity-70 hover:opacity-100"
                />
              </div>
              <p className="text-base text-muted-foreground italic">
                {word.romaji}
              </p>
            </div>

            <div className="mt-4 text-xs text-muted-foreground text-center">
              Click to reveal translation
            </div>
          </div>
        </Card>

        {/* Back of card - Translation */}
        <Card className="card-back gradient-primary text-primary-foreground shadow-card p-6 border-0">
          <div className="flex flex-col h-full">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 self-start">
              {word.wordType}
            </Badge>
            
            {/* Image section on back too */}
            {generatedImageUrl && (
              <div className="mb-4 flex justify-center">
                <img 
                  src={generatedImageUrl} 
                  alt={translation}
                  className="w-20 h-20 object-cover rounded-lg border-2 border-white/30"
                />
              </div>
            )}
            
            <div className="flex flex-col items-center justify-center text-center space-y-4 flex-1">
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-2xl font-bold">
                  {translation}
                </h2>
                <VoiceButton 
                  text={translation}
                  language={language}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                />
              </div>
              
              {word.examples[0] && (
                <div className="space-y-2 pt-4 border-t border-white/20 w-full">
                  <p className="text-sm font-medium">Example:</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-sm opacity-90">
                      {word.examples[0].japanese}
                    </p>
                    <VoiceButton 
                      text={word.examples[0].japanese}
                      language="japanese"
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 opacity-70"
                    />
                  </div>
                  <p className="text-xs opacity-75 italic">
                    {word.examples[0].romaji}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-sm font-medium">
                      {exampleTranslation}
                    </p>
                    <VoiceButton 
                      text={exampleTranslation}
                      language={language}
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 opacity-70"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 text-xs opacity-75 text-center">
              Click to see Japanese again
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};