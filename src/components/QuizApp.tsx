import { useState, useMemo, useCallback } from 'react';
import { vocabularyData } from '@/data/vocabulary';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, RotateCcw, Settings } from 'lucide-react';

export type QuizType = 'japanese-to-english' | 'english-to-japanese' | 'examples' | 'mixed';

interface QuizSettings {
  type: QuizType;
  questionCount: number;
  categories: string[];
  levels: string[];
}

export const QuizApp = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<{ correct: boolean; question: any; userAnswer: string; correctAnswer: string }>>([]);
  const [showResults, setShowResults] = useState(false);
  const [settings, setSettings] = useState<QuizSettings>({
    type: 'mixed',
    questionCount: 10,
    categories: ['all'],
    levels: ['all']
  });

  const filteredVocabulary = useMemo(() => {
    return vocabularyData.filter(word => {
      const matchesCategory = settings.categories.includes('all') || settings.categories.includes(word.category);
      const matchesLevel = settings.levels.includes('all') || settings.levels.includes(word.level);
      return matchesCategory && matchesLevel;
    });
  }, [settings.categories, settings.levels]);

  const quizQuestions = useMemo(() => {
    if (!quizStarted) return [];
    
    const shuffled = [...filteredVocabulary].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(settings.questionCount, shuffled.length));
    
    return selected.map((word, index) => {
      const questionTypes = settings.type === 'mixed' 
        ? ['japanese-to-english', 'english-to-japanese', 'examples']
        : [settings.type];
      
      const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
      
      if (type === 'examples' && word.examples.length > 0) {
        const example = word.examples[Math.floor(Math.random() * word.examples.length)];
        return {
          id: `${word.id}-example-${index}`,
          type: 'examples' as const,
          question: example.japanese,
          questionText: example.hiragana,
          correctAnswer: example.english,
          word: word,
          example: example
        };
      } else if (type === 'english-to-japanese') {
        return {
          id: `${word.id}-etj-${index}`,
          type: 'english-to-japanese' as const,
          question: word.english,
          correctAnswer: word.japanese,
          word: word
        };
      } else {
        return {
          id: `${word.id}-jte-${index}`,
          type: 'japanese-to-english' as const,
          question: word.japanese,
          questionText: word.hiragana,
          correctAnswer: word.english,
          word: word
        };
      }
    });
  }, [quizStarted, filteredVocabulary, settings]);

  const handleAnswer = useCallback((userAnswer: string, isCorrect: boolean) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    setAnswers(prev => [...prev, {
      correct: isCorrect,
      question: currentQuestion,
      userAnswer: userAnswer,
      correctAnswer: currentQuestion.correctAnswer
    }]);

    if (currentQuestionIndex + 1 >= quizQuestions.length) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex, quizQuestions]);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
  };

  const score = useMemo(() => {
    const correct = answers.filter(a => a.correct).length;
    return {
      correct,
      total: answers.length,
      percentage: answers.length > 0 ? Math.round((correct / answers.length) * 100) : 0
    };
  }, [answers]);

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background">
        <header className="gradient-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Brain className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-bold">JLPT Quiz</h1>
            </div>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Test your Japanese vocabulary knowledge with interactive quizzes
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="card-elegant p-8 space-y-6">
              <h2 className="text-2xl font-bold text-center">Quiz Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Quiz Type</label>
                  <select 
                    value={settings.type}
                    onChange={(e) => setSettings(prev => ({ ...prev, type: e.target.value as QuizType }))}
                    className="w-full p-3 rounded-lg border border-border bg-background"
                  >
                    <option value="mixed">Mixed Questions</option>
                    <option value="japanese-to-english">Japanese to English</option>
                    <option value="english-to-japanese">English to Japanese</option>
                    <option value="examples">Example Sentences</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Number of Questions</label>
                  <select 
                    value={settings.questionCount}
                    onChange={(e) => setSettings(prev => ({ ...prev, questionCount: parseInt(e.target.value) }))}
                    className="w-full p-3 rounded-lg border border-border bg-background"
                  >
                    <option value={5}>5 Questions</option>
                    <option value={10}>10 Questions</option>
                    <option value={15}>15 Questions</option>
                    <option value={20}>20 Questions</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">
                  {filteredVocabulary.length} words available
                </Badge>
              </div>

              <Button 
                onClick={startQuiz}
                className="w-full py-6 text-lg"
                disabled={filteredVocabulary.length === 0}
              >
                Start Quiz
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (showResults) {
    return (
      <QuizResults 
        answers={answers}
        onRetry={resetQuiz}
        onNewQuiz={() => {
          setQuizStarted(false);
          setShowResults(false);
        }}
      />
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8" />
              <h1 className="text-2xl font-bold">JLPT Quiz</h1>
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
              <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
              <span>Score: {score.correct}/{answers.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <QuizQuestion
          question={currentQuestion}
          onAnswer={handleAnswer}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
        />
      </main>
    </div>
  );
};