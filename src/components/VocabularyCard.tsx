import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VocabularyWord } from '@/data/vocabulary';
import { VoiceButton } from './VoiceButton';

interface VocabularyCardProps {
  word: VocabularyWord;
  language: 'english' | 'french';
}

export const VocabularyCard = ({ word, language }: VocabularyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const translation = language === 'english' ? word.english : word.french;
  const exampleTranslation = language === 'english' ? word.examples[0]?.english : word.examples[0]?.french;

  return (
    <div className="perspective-1000 w-full h-80">
      <div 
        className={`card-flip cursor-pointer relative w-full h-full transition-smooth ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        {/* Front of card - Japanese */}
        <Card className="card-front gradient-card shadow-card hover:shadow-card-hover transition-smooth p-6 border-0">
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary" className="text-xs">
                {word.level}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {word.category}
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-4xl font-bold text-primary mb-2">
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
                <p className="text-xl text-muted-foreground">
                  {word.hiragana}
                </p>
                <VoiceButton 
                  text={word.hiragana}
                  language="japanese"
                  size="icon"
                  className="opacity-70 hover:opacity-100"
                />
              </div>
              <p className="text-lg text-muted-foreground italic">
                {word.romaji}
              </p>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              Click to reveal translation
            </div>
          </div>
        </Card>

        {/* Back of card - Translation */}
        <Card className="card-back gradient-primary text-primary-foreground shadow-card p-6 border-0">
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              {word.wordType}
            </Badge>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-3xl font-bold">
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
                <div className="space-y-2 pt-4 border-t border-white/20">
                  <p className="text-lg font-medium">Example:</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-base opacity-90">
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
                  <p className="text-sm opacity-75 italic">
                    {word.examples[0].romaji}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-base font-medium">
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

            <div className="mt-6 text-sm opacity-75">
              Click to see Japanese again
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};