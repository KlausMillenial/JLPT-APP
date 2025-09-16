import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { KanjiDrawingCanvas } from './KanjiDrawingCanvas';
import { VoiceButton } from './VoiceButton';
import { PenTool, X } from 'lucide-react';
import { VocabularyWord } from '../data/vocabulary';

interface KanjiPracticeModalProps {
  word: VocabularyWord;
  language: 'english' | 'french';
}

export const KanjiPracticeModal: React.FC<KanjiPracticeModalProps> = ({ 
  word, 
  language 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const translation = language === 'english' ? word.english : word.french;

  // Only show for words with kanji (not just hiragana)
  if (word.japanese === word.hiragana) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <PenTool className="h-4 w-4" />
          Tracer
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Entraînement d'écriture - {word.japanese}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
          {/* Left Side - Kanji Display */}
          <div className="space-y-6">
            {/* Kanji Display */}
            <div className="text-center bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Kanji à tracer :
              </h3>
              <div className="text-8xl font-bold text-primary mb-4">
                {word.japanese}
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl text-muted-foreground">
                  {word.hiragana}
                </span>
                <VoiceButton
                  text={word.hiragana}
                  language="japanese"
                  variant="outline"
                  size="sm"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Drawing Canvas */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Zone de pratique
            </h3>
            <div className="flex-1">
              <KanjiDrawingCanvas
                targetKanji={word.japanese}
                onDrawingComplete={(imageData) => {
                  console.log('Kanji drawing completed:', imageData);
                }}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};