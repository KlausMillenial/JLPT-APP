import { Volume2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { getElevenLabsApiKey } from '@/lib/config';
import { useToast } from '@/hooks/use-toast';

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
  const { speak, isLoading, error } = useTextToSpeech();
  const { toast } = useToast();
  
  const handleSpeak = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip when clicking voice button
    
    const apiKey = getElevenLabsApiKey();
    if (!apiKey) {
      toast({
        title: "Voice Not Configured",
        description: "Please set up your ElevenLabs API key in the settings to enable voice pronunciation.",
        variant: "destructive"
      });
      return;
    }

    await speak({ text, language });
    
    if (error) {
      toast({
        title: "Voice Error", 
        description: error.includes('401') ? 
          "Invalid ElevenLabs API key. Please check your API key in settings." : 
          "Failed to play audio. Please try again.",
        variant: "destructive"
      });
    }
  };

  const speechId = `${text}_${Date.now()}`;
  const isCurrentlyLoading = isLoading === speechId;
  const hasApiKey = getElevenLabsApiKey();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleSpeak}
      disabled={isCurrentlyLoading}
      className={`transition-smooth hover:scale-110 ${!hasApiKey ? 'opacity-50' : ''} ${className}`}
      title={hasApiKey ? 'Listen to pronunciation' : 'Configure API key to enable voice'}
    >
      {isCurrentlyLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : !hasApiKey ? (
        <AlertCircle className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </Button>
  );
};