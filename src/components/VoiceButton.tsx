import { Volume2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

interface VoiceButtonProps {
  text: string;
  language: 'japanese' | 'english' | 'french';
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export const VoiceButton = ({ 
  text, 
  language, 
  variant = 'ghost', 
  size = 'sm',
  className = ''
}: VoiceButtonProps) => {
  const { speak, isLoading } = useTextToSpeech();
  
  const handleSpeak = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip when clicking voice button
    await speak({ text, language });
  };

  const speechId = `${text}_${Date.now()}`;
  const isCurrentlyLoading = isLoading === speechId;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleSpeak}
      disabled={isCurrentlyLoading}
      className={`transition-smooth hover:scale-110 ${className}`}
      title={`Listen to pronunciation`}
    >
      {isCurrentlyLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </Button>
  );
};