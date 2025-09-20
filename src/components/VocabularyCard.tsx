import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VocabularyWord } from '@/data/vocabulary';
import { VoiceButton } from './VoiceButton';

type LanguageOption = 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

interface VocabularyCardProps {
  word: VocabularyWord;
  language: LanguageOption;
}


export const VocabularyCard = ({ word, language }: VocabularyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't flip if clicking on buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  const translation = word[language] || word.english; // Fallback to English if translation not available
  const exampleTranslation = word.examples[0]?.[language] || word.examples[0]?.english; // Fallback to English if translation not available

  return (
    <div className="perspective-1000 w-full h-[400px] md:h-[500px]">
      <div 
        className={`card-flip cursor-pointer relative w-full h-full transition-smooth ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        {/* Front of card - Translation */}
        <Card className="card-front gradient-card shadow-card hover:shadow-card-hover transition-smooth p-0 border-0 overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Image section - Larger portion of the card */}
            <div className="h-48 md:h-64 relative overflow-hidden">
              <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5">
                <span className="text-sm text-primary/60 text-center">
                  Visual learning coming soon
                </span>
              </div>
            </div>
            
            {/* Content section - Other half of the card */}
            <div className="flex-1 p-4 md:p-6 flex flex-col">
              {/* Header with badges */}
              <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
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
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <h2 className="text-lg md:text-2xl font-bold text-primary text-center">
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
        <Card className="card-back gradient-primary text-primary-foreground shadow-card p-4 md:p-6 border-0">
          <div className="flex flex-col h-full">
            
            {/* Japanese content */}
            <div className="flex flex-col items-center justify-center text-center space-y-3 flex-1">
              <div className="flex items-center justify-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center">
                  {word.japanese}
                </h2>
              </div>
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <p className="text-lg md:text-xl text-white/90 text-center">
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
              <p className="text-sm md:text-lg text-white/75 italic text-center">
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