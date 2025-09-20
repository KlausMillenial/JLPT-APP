import { useState, useMemo, useCallback, useEffect } from 'react';
import { vocabularyData } from '@/data/vocabulary';
import { VocabularyWord } from '@/data/vocabulary';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { VoiceButton } from './VoiceButton';
import { Brain, RotateCcw, X, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

type LanguageOption = 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

interface SwipeQuizProps {
  selectedLanguage?: LanguageOption;
  vocabularyData?: VocabularyWord[];
}

interface QuizCard {
  word: VocabularyWord;
  translation: string;
  correctImage: string;
  incorrectImage: string;
  correctImageWord: VocabularyWord;
  incorrectImageWord: VocabularyWord;
  correctPosition: 'left' | 'right';
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

  // Initialize quiz cards
  const initializeQuiz = useCallback(() => {
    // Filter words that have images
    const wordsWithImages = currentVocabularyData.filter(word => word.imageUrl);
    
    if (wordsWithImages.length < 2) {
      toast.error('Need at least 2 words with images for the quiz');
      return;
    }

    const shuffled = [...wordsWithImages].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(15, wordsWithImages.length)); // Up to 15 cards

    const cards: QuizCard[] = selected.map(word => {
      const translation = word[selectedLanguage] || word.english;
      
      // Get a random incorrect image from other words
      const otherWords = wordsWithImages.filter(w => w.id !== word.id);
      const incorrectWord = otherWords[Math.floor(Math.random() * otherWords.length)];
      
      // Randomly decide if correct answer is on left or right
      const correctPosition: 'left' | 'right' = Math.random() < 0.5 ? 'left' : 'right';
      
      return {
        word,
        translation,
        correctImage: word.imageUrl!,
        incorrectImage: incorrectWord.imageUrl!,
        correctImageWord: word,
        incorrectImageWord: incorrectWord,
        correctPosition,
      };
    });

    setQuizCards(cards);
    setCurrentCardIndex(0);
    setScore({ correct: 0, total: 0 });
    setShowResults(false);
  }, [currentVocabularyData, selectedLanguage]);

  // Handle swipe selection
  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    if (isAnimating) return;

    const currentCard = quizCards[currentCardIndex];
    const isCorrect = direction === currentCard?.correctPosition;
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
        setCurrentCardIndex(currentCardIndex + 1);
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
      <div>Loading quiz...</div>
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

            <div className="h-96">
              {/* Word Section */}
              <div className="p-6 text-center border-b">
                <h3 className="text-3xl font-bold text-primary mb-2">
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
                <div className="flex justify-center gap-2 mt-3">
                  <Badge variant="secondary" className="text-xs">
                    {currentCard.word.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {currentCard.word.category}
                  </Badge>
                </div>
              </div>

              {/* Images Section */}
              <div className="flex h-56">
                {/* Left Image */}
                <div 
                  className="flex-1 relative cursor-pointer hover:opacity-80 transition-opacity group"
                  onClick={() => handleSwipe('left')}
                >
                  <img 
                    src={currentCard.correctPosition === 'left' ? currentCard.correctImage : currentCard.incorrectImage} 
                    alt={currentCard.correctPosition === 'left' ? currentCard.correctImageWord.english : currentCard.incorrectImageWord.english}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${currentCard.correctPosition === 'left' ? 'bg-green-500/20' : 'bg-red-500/20'} opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Right Image */}
                <div 
                  className="flex-1 relative cursor-pointer hover:opacity-80 transition-opacity group border-l"
                  onClick={() => handleSwipe('right')}
                >
                  <img 
                    src={currentCard.correctPosition === 'right' ? currentCard.correctImage : currentCard.incorrectImage} 
                    alt={currentCard.correctPosition === 'right' ? currentCard.correctImageWord.english : currentCard.incorrectImageWord.english}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${currentCard.correctPosition === 'right' ? 'bg-green-500/20' : 'bg-red-500/20'} opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                    <ChevronRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Swipe Instructions */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            Which image matches "{currentCard.word.japanese}"?
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <Button
              onClick={() => handleSwipe('left')}
              disabled={isAnimating}
              variant="outline"
              size="lg"
              className={`flex-1 py-4 ${currentCard.correctPosition === 'left' ? 'bg-green-600 hover:bg-green-700 text-white' : 'border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300'}`}
            >
              <ChevronLeft className="w-6 h-6 mr-2" />
              Left Image
            </Button>
            <Button
              onClick={() => handleSwipe('right')}
              disabled={isAnimating}
              size="lg"
              className={`flex-1 py-4 ${currentCard.correctPosition === 'right' ? 'bg-green-600 hover:bg-green-700 text-white' : 'border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300'}`}
            >
              <ChevronRight className="w-6 h-6 mr-2" />
              Right Image
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};