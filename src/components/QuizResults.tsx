import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, RotateCcw, BookOpen, Target, TrendingUp } from 'lucide-react';

interface QuizResultsProps {
  answers: Array<{
    correct: boolean;
    question: any;
    userAnswer: string;
    correctAnswer: string;
  }>;
  onRetry: () => void;
  onNewQuiz: () => void;
}

export const QuizResults = ({ answers, onRetry, onNewQuiz }: QuizResultsProps) => {
  const correctCount = answers.filter(a => a.correct).length;
  const totalCount = answers.length;
  const percentage = Math.round((correctCount / totalCount) * 100);

  const getPerformanceLevel = () => {
    if (percentage >= 90) return { level: 'Excellent!', color: 'text-green-600', icon: '🏆' };
    if (percentage >= 75) return { level: 'Very Good!', color: 'text-blue-600', icon: '⭐' };
    if (percentage >= 60) return { level: 'Good!', color: 'text-yellow-600', icon: '👍' };
    if (percentage >= 40) return { level: 'Keep Practicing!', color: 'text-orange-600', icon: '📚' };
    return { level: 'Need More Study!', color: 'text-red-600', icon: '💪' };
  };

  const performance = getPerformanceLevel();

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'japanese-to-english':
        return 'JP→EN';
      case 'english-to-japanese':
        return 'EN→JP';
      case 'examples':
        return 'Example';
      default:
        return 'Mixed';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Trophy className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Quiz Complete!</h1>
          </div>
          <div className="text-6xl mb-4">{performance.icon}</div>
          <p className={`text-2xl font-bold ${performance.color}`}>
            {performance.level}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overall Score */}
          <Card className="p-8 text-center">
            <div className="space-y-6">
              <div className="text-6xl font-bold text-primary">
                {percentage}%
              </div>
              <div className="text-xl text-muted-foreground">
                {correctCount} out of {totalCount} correct answers
              </div>
              
              <div className="flex justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600" />
                  <span>{correctCount} Correct</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-red-600" />
                  <span>{totalCount - correctCount} Incorrect</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={onRetry} variant="outline" className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Retry Quiz
                </Button>
                <Button onClick={onNewQuiz} className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  New Quiz
                </Button>
              </div>
            </div>
          </Card>

          {/* Detailed Results */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Detailed Results</h2>
            <div className="space-y-4">
              {answers.map((answer, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border ${
                    answer.correct 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Q{index + 1}</span>
                        <Badge variant="outline" className="text-xs">
                          {getQuestionTypeLabel(answer.question.type)}
                        </Badge>
                        {answer.question.word && (
                          <>
                            <Badge variant="secondary" className="text-xs">
                              {answer.question.word.category}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {answer.question.word.level}
                            </Badge>
                          </>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">Question: </span>
                          <span>{answer.question.question}</span>
                          {answer.question.questionText && (
                            <span className="text-muted-foreground ml-2">
                              ({answer.question.questionText})
                            </span>
                          )}
                        </div>
                        
                        <div>
                          <span className="font-medium">Your Answer: </span>
                          <span className={answer.correct ? 'text-green-600' : 'text-red-600'}>
                            {answer.userAnswer}
                          </span>
                        </div>
                        
                        {!answer.correct && (
                          <div>
                            <span className="font-medium">Correct Answer: </span>
                            <span className="text-green-600">{answer.correctAnswer}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      {answer.correct ? (
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};