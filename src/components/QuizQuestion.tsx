import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VoiceButton } from './VoiceButton';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { vocabularyData } from '@/data/vocabulary';

interface QuizQuestionProps {
  question: {
    id: string;
    type: 'japanese-to-target' | 'target-to-japanese';
    question: string;
    questionText?: string;
    correctAnswer: string;
    word: any;
    language?: string;
  };
  onAnswer: (userAnswer: string, isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
  targetLanguage?: string;
}

export const QuizQuestion = ({ question, onAnswer, questionNumber, totalQuestions, targetLanguage = 'english' }: QuizQuestionProps) => {
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showContinueButton, setShowContinueButton] = useState(false);

  // Generate multiple choice options for all question types
  const choices = useMemo(() => {
    
    // For multiple choice, generate 3 wrong answers + 1 correct answer
    const correctAnswer = question.correctAnswer;
    
    let wrongAnswers: string[] = [];
    if (question.type === 'japanese-to-target') {
      const targetField = targetLanguage === 'english' ? 'english' :
                         targetLanguage === 'french' ? 'french' :
                         targetLanguage === 'german' ? 'german' :
                         targetLanguage === 'vietnamese' ? 'vietnamese' :
                         targetLanguage === 'chinese' ? 'chinese' :
                         targetLanguage === 'korean' ? 'korean' :
                         targetLanguage === 'spanish' ? 'spanish' : 'english';
      
      wrongAnswers = vocabularyData
        .filter((w: any) => w[targetField] !== correctAnswer && w.id !== question.word.id)
        .map((w: any) => w[targetField])
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    } else {
      wrongAnswers = vocabularyData
        .filter((w: any) => w.japanese !== correctAnswer && w.id !== question.word.id)
        .map((w: any) => w.japanese)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    }
    
    const allChoices = [correctAnswer, ...wrongAnswers];
    return allChoices.sort(() => Math.random() - 0.5);
  }, [question, targetLanguage]);

  const checkAnswer = (answer: string) => {
    const correct = answer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    setIsCorrect(correct);
    setShowResult(true);
    
    console.log('Quiz Debug - Answer result:', correct ? 'correct' : 'incorrect');
    
    // Show continue button immediately for incorrect answers (so users can see explanation)
    // For correct answers, show after 2 seconds
    const delay = correct ? 2000 : 500;
    setTimeout(() => {
      console.log('Quiz Debug - Showing continue button');
      setShowContinueButton(true);
    }, delay);
  };

  const handleContinue = () => {
    onAnswer(selectedChoice || '', isCorrect);
    setShowResult(false);
    setSelectedChoice(null);
    setShowContinueButton(false);
  };

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
    checkAnswer(choice);
  };

  const getQuestionTypeLabel = () => {
    switch (question.type) {
      case 'japanese-to-target':
        return `Translate to ${targetLanguage.charAt(0).toUpperCase() + targetLanguage.slice(1)}`;
      case 'target-to-japanese':
        return 'Translate to Japanese';
      default:
        return 'Question';
    }
  };

  const getQuestionLanguage = (): 'japanese' | 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish' => {
    if (question.type === 'target-to-japanese') return targetLanguage as any;
    return 'japanese';
  };

  const getAnswerLanguage = (): 'japanese' | 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish' => {
    if (question.type === 'target-to-japanese') return 'japanese';
    return targetLanguage as any;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8 space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="mb-4">
            {getQuestionTypeLabel()}
          </Badge>
          <div className="text-sm text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">
              {question.question}
            </div>
            {question.questionText && (
              <div className="text-xl text-muted-foreground">
                {question.questionText}
              </div>
            )}
            <div className="flex justify-center">
              <VoiceButton 
                text={question.question}
                language={getQuestionLanguage()}
              />
            </div>
          </div>

          {question.word && (
            <div className="text-sm text-muted-foreground">
              <Badge variant="secondary">{question.word.category}</Badge>
              <Badge variant="secondary" className="ml-2">{question.word.level}</Badge>
            </div>
          )}
        </div>

        {showResult ? (
          <div className="space-y-4">
            <div className={`text-center p-4 rounded-lg ${
              isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center justify-center gap-2 mb-2">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600" />
                )}
                <span className={`font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              
              <div className="text-lg space-y-3">
                {!isCorrect && (
                  <p>Correct answer: <span className="font-semibold text-xl">{question.correctAnswer}</span></p>
                )}
                
                {question.type === 'target-to-japanese' && (
                  <div className="flex justify-center">
                    <VoiceButton 
                      text={question.correctAnswer}
                      language={getAnswerLanguage()}
                      variant="outline"
                      size="sm"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Show additional info about the word */}
            <div className="text-center space-y-2">
              <div className="text-lg space-y-1">
                <div>
                  <strong>{question.word.japanese}</strong> ({question.word.hiragana})
                </div>
                <div className="text-muted-foreground italic">
                  {question.word.romaji}
                </div>
                <div>
                  {question.word.english}
                </div>
              </div>
              {question.word.examples && question.word.examples[0] && (
                <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                  <div className="font-medium text-lg text-foreground">Example:</div>
                  <div className="space-y-2">
                    <div className="text-xl font-medium text-foreground">
                      {question.word.examples[0].japanese}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {question.word.examples[0].hiragana}
                    </div>
                    <div className="text-lg text-muted-foreground italic">
                      {question.word.examples[0].romaji}
                    </div>
                    <div className="text-lg italic text-foreground">
                      "{question.word.examples[0].english}"
                    </div>
                    <div className="flex justify-center">
                      <VoiceButton 
                        text={question.word.examples[0].japanese}
                        language="japanese"
                        variant="outline"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {showContinueButton && (
              <Button 
                onClick={handleContinue}
                className="w-full py-6 text-lg btn-playful"
              >
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-3">
              {choices.map((choice, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full p-4 text-left justify-start h-auto"
                  onClick={() => handleChoiceSelect(choice)}
                >
                  <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                  {choice}
                </Button>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};