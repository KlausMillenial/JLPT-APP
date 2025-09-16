import { useState, useMemo, useCallback, useEffect } from 'react';
import { vocabularyData } from '@/data/vocabulary';
import { VocabularyWord } from '@/data/vocabulary';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { HuggingFaceService } from '@/services/huggingFaceService';
import { VoiceButton } from './VoiceButton';
import { Brain, RotateCcw, X, Check, Loader2, Wand2, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

type LanguageOption = 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

interface SwipeQuizProps {
  selectedLanguage?: LanguageOption;
  vocabularyData?: VocabularyWord[];
}

interface QuizCard {
  word: VocabularyWord;
  translation: string;
  imageUrl?: string;
  isGeneratingImage?: boolean;
}

export const SwipeQuiz = ({ selectedLanguage = 'english', vocabularyData: propVocabularyData }: SwipeQuizProps) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [quizCards, setQuizCards] = useState<QuizCard[]>([]);
  const [showResults, setShowResults] = useState(false);

  const currentVocabularyData = propVocabularyData || vocabularyData;

  // Create image prompt for vocabulary words
  const createImagePrompt = (word: VocabularyWord, translation: string): string => {
    return `Clear, simple cartoon illustration of ${translation}, educational style for language learning, bright colors, easy to recognize, isolated on white background, detailed but not cluttered`;
  };

  // Generate image for a word
  const generateImage = async (word: VocabularyWord, translation: string): Promise<string | null> => {
    const apiKey = HuggingFaceService.getStoredApiKey();
    if (!apiKey) return null;

    try {
      const service = new HuggingFaceService(apiKey);
      const prompt = createImagePrompt(word, translation);
      const result = await service.generateImage({
        positivePrompt: prompt,
        width: 512,
        height: 512,
      });
      return result.imageURL;
    } catch (error) {
      console.error('Image generation error:', error);
      return null;
    }
  };

  // Initialize quiz cards
  const initializeQuiz = useCallback(async () => {
    const shuffled = [...currentVocabularyData].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 20); // 20 cards for the quiz

    const cards: QuizCard[] = selected.map(word => {
      const translation = word[selectedLanguage] || word.english;
      return {
        word,
        translation,
        isGeneratingImage: true,
      };
    });

    setQuizCards(cards);
    setCurrentCardIndex(0);
    setScore({ correct: 0, total: 0 });
    setShowResults(false);

    // Generate images for first few cards
    for (let i = 0; i < Math.min(3, cards.length); i++) {
      const card = cards[i];
      const imageUrl = await generateImage(card.word, card.translation);
      setQuizCards(prev => prev.map((c, idx) => 
        idx === i ? { ...c, imageUrl, isGeneratingImage: false } : c
      ));
    }
  }, [currentVocabularyData, selectedLanguage]);

  // Handle answer selection
  const handleAnswer = useCallback(async (isCorrect: boolean) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setShowFeedback(isCorrect ? 'correct' : 'wrong');

    // Update score
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    // Wait for animation
    setTimeout(() => {
      setShowFeedback(null);
      setIsAnimating(false);

      if (currentCardIndex + 1 >= quizCards.length) {
        setShowResults(true);
      } else {
        const nextIndex = currentCardIndex + 1;
        setCurrentCardIndex(nextIndex);

        // Pre-generate image for next card if needed
        const nextCard = quizCards[nextIndex + 1];
        if (nextCard && !nextCard.imageUrl && !nextCard.isGeneratingImage) {
          setQuizCards(prev => prev.map((c, idx) => 
            idx === nextIndex + 1 ? { ...c, isGeneratingImage: true } : c
          ));
          
          generateImage(nextCard.word, nextCard.translation).then(imageUrl => {
            setQuizCards(prev => prev.map((c, idx) => 
              idx === nextIndex + 1 ? { ...c, imageUrl, isGeneratingImage: false } : c
            ));
          });
        }
      }
    }, 1500);
  }, [currentCardIndex, quizCards, isAnimating]);

  const startQuiz = () => {
    setQuizStarted(true);
    initializeQuiz();
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentCardIndex(0);
    setScore({ correct: 0, total: 0 });
    setShowFeedback(null);
    setIsAnimating(false);
    setQuizCards([]);
    setShowResults(false);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background">
        <header className="gradient-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Brain className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-bold">Swipe Quiz</h1>
            </div>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Swipe right if you know the word, left if you don't!
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto space-y-8">
            <div className="card-elegant p-8 space-y-6 text-center">
              <h2 className="text-2xl font-bold">How to Play</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <span>Swipe right if you know the Japanese word</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </div>
                  <span>Swipe left if you don't know it</span>
                </div>
              </div>
              
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {currentVocabularyData.length} words available
              </Badge>

              <Button 
                onClick={startQuiz}
                className="w-full py-6 text-lg"
                disabled={currentVocabularyData.length === 0}
              >
                Start Swipe Quiz
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (showResults) {
    const percentage = Math.round((score.correct / score.total) * 100);
    return (
      <div className="min-h-screen bg-background">
        <header className="gradient-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Brain className="w-10 h-10" />
              <h1 className="text-4xl font-bold">Quiz Complete!</h1>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className="card-elegant p-8 space-y-6 text-center">
              <div className="text-6xl font-bold text-primary mb-4">
                {percentage}%
              </div>
              <div className="text-xl">
                {score.correct} out of {score.total} correct
              </div>
              
              <div className="space-y-3">
                {percentage >= 80 && (
                  <div className="text-green-600 font-medium">Excellent! 🎉</div>
                )}
                {percentage >= 60 && percentage < 80 && (
                  <div className="text-yellow-600 font-medium">Good job! 👍</div>
                )}
                {percentage < 60 && (
                  <div className="text-red-600 font-medium">Keep practicing! 📚</div>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={resetQuiz} variant="outline" className="flex-1">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button onClick={startQuiz} className="flex-1">
                  New Quiz
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentCard = quizCards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / quizCards.length) * 100;

  if (!currentCard) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Swipe Quiz</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={resetQuiz}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
          
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Card {currentCardIndex + 1} of {quizCards.length}</span>
              <span>Score: {score.correct}/{score.total}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="max-w-sm mx-auto relative">
          {/* Quiz Card */}
          <Card className={`relative card-elegant p-0 overflow-hidden transition-all duration-300 ${
            showFeedback === 'correct' ? 'ring-4 ring-green-500 scale-105' : 
            showFeedback === 'wrong' ? 'ring-4 ring-red-500 scale-105' : ''
          }`}>
            {/* Feedback Overlay */}
            {showFeedback && (
              <div className={`absolute inset-0 z-20 flex items-center justify-center ${
                showFeedback === 'correct' ? 'bg-green-500/90' : 'bg-red-500/90'
              }`}>
                <div className="text-white text-center">
                  {showFeedback === 'correct' ? (
                    <Check className="w-16 h-16 mx-auto mb-2" />
                  ) : (
                    <X className="w-16 h-16 mx-auto mb-2" />
                  )}
                  <div className="text-2xl font-bold">
                    {showFeedback === 'correct' ? 'Correct!' : 'Keep Learning!'}
                  </div>
                  <div className="text-lg mt-2">
                    {currentCard.word.japanese} = {currentCard.translation}
                  </div>
                </div>
              </div>
            )}

            <div className="h-80">
              {/* Image Section */}
              <div className="h-48 relative overflow-hidden bg-gray-50 flex items-center justify-center">
                {currentCard.isGeneratingImage ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mb-3" />
                    <span className="text-sm text-muted-foreground">Generating image...</span>
                  </div>
                ) : currentCard.imageUrl ? (
                  <img 
                    src={currentCard.imageUrl} 
                    alt={currentCard.translation}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5">
                    <Wand2 className="w-8 h-8 text-primary/60 mb-3" />
                    <span className="text-sm text-primary/60 text-center">Image loading...</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {currentCard.word.japanese}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-lg text-muted-foreground">
                      {currentCard.word.hiragana}
                    </p>
                    <VoiceButton 
                      text={currentCard.word.hiragana}
                      language="japanese"
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {currentCard.word.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {currentCard.word.category}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Swipe Instructions */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            Do you know this word?
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <Button
              onClick={() => handleAnswer(false)}
              disabled={isAnimating}
              variant="outline"
              size="lg"
              className="flex-1 py-4 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
            >
              <X className="w-6 h-6 mr-2" />
              Don't Know
            </Button>
            <Button
              onClick={() => handleAnswer(true)}
              disabled={isAnimating}
              size="lg"
              className="flex-1 py-4 bg-green-600 hover:bg-green-700"
            >
              <Check className="w-6 h-6 mr-2" />
              I Know It!
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};