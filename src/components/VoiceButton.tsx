import { Volume2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { getElevenLabsApiKey } from '@/lib/config';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';

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
  const [hasApiKey, setHasApiKey] = useState(false);

  // Check for API key on mount and update when localStorage changes
  useEffect(() => {
    const checkApiKey = () => {
      const key = getElevenLabsApiKey();
      console.log('VoiceButton Debug - Checking API key:', key ? 'found' : 'not found');
      setHasApiKey(!!key && key.startsWith('sk_'));
    };
    
    checkApiKey();
    
    // Listen for custom event when API key is updated
    const handleApiKeyUpdate = () => {
      console.log('VoiceButton Debug - API key updated, refreshing...');
      checkApiKey();
    };
    
    window.addEventListener('elevenlabs-key-updated', handleApiKeyUpdate);
    return () => window.removeEventListener('elevenlabs-key-updated', handleApiKeyUpdate);
  }, []);
  
  const handleSpeak = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip when clicking voice button
    
    const apiKey = getElevenLabsApiKey();
    console.log('VoiceButton Debug - Click handler, API key exists:', !!apiKey);
    
    if (!apiKey) {
      toast({
        title: "Voice Not Configured",
        description: "Please set up your ElevenLabs API key in the settings to enable voice pronunciation.",
        variant: "destructive"
      });
      return;
    }

    if (!apiKey.startsWith('sk_')) {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid ElevenLabs API key (starts with 'sk_') in settings.",
        variant: "destructive"
      });
      return;
    }

    await speak({ text, language });
    
    if (error) {
      console.log('VoiceButton Debug - TTS error:', error);
      toast({
        title: "Voice Error", 
        description: error.includes('401') ? 
          "Invalid ElevenLabs API key. Please check your API key in settings." : 
          error,
        variant: "destructive"
      });
    }
  };

  const speechId = `${text}_${Date.now()}`;
  const isCurrentlyLoading = isLoading === speechId;

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