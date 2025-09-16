import { useState, useCallback } from 'react';
import { ELEVENLABS_CONFIG } from '@/lib/config';

type LanguageOption = 'japanese' | 'english' | 'french' | 'german' | 'vietnamese' | 'chinese' | 'korean' | 'spanish';

interface TextToSpeechOptions {
  text: string;
  language?: LanguageOption;
}

export const useTextToSpeech = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const speak = useCallback(async ({ text, language = 'japanese' }: TextToSpeechOptions) => {
    if (!text.trim()) return;

    const apiKey = ELEVENLABS_CONFIG.apiKey;
    console.log('TTS Debug - API Key exists:', !!apiKey);
    console.log('TTS Debug - API Key format:', apiKey ? `${apiKey.substring(0, 8)}...` : 'none');
    console.log('TTS Debug - localStorage value:', localStorage.getItem('elevenlabs_api_key') ? 'exists' : 'missing');
    
    if (!apiKey) {
      console.log('TTS Debug - No API key found');
      setError('ElevenLabs API key not configured. Please add your API key in settings.');
      return;
    }

    if (!apiKey.startsWith('sk_')) {
      console.log('TTS Debug - Invalid API key format detected');
      setError('Invalid ElevenLabs API key format. Please use a key that starts with "sk_"');
      return;
    }

    const speechId = `${text}_${Date.now()}`;
    setIsLoading(speechId);
    setError(null);

    try {
      const voiceId = ELEVENLABS_CONFIG.voices[language];
      console.log('TTS Debug - Using voice:', voiceId, 'for language:', language);

      const response = await fetch(`${ELEVENLABS_CONFIG.apiUrl}/text-to-speech/${voiceId}`, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey
        },
        body: JSON.stringify({
          text: text,
          model_id: ELEVENLABS_CONFIG.defaultModel,
          voice_settings: {
            stability: language === 'japanese' ? 0.7 : 0.5,
            similarity_boost: language === 'japanese' ? 0.8 : 0.75,
            style: 0.0,
            use_speaker_boost: true
          },
          // Add language hint to help with proper pronunciation
          language_code: language === 'japanese' ? 'ja' : language === 'french' ? 'fr' : 'en'
        })
      });

      console.log('TTS Debug - Response status:', response.status);
      console.log('TTS Debug - Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.log('TTS Debug - Error response:', errorText);
        let errorMessage = `ElevenLabs API error: ${response.status}`;
        
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.detail?.message) {
            errorMessage += ` - ${errorData.detail.message}`;
          }
        } catch (e) {
          // If we can't parse the error, just use the status
        }
        
        throw new Error(errorMessage);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      await new Promise((resolve, reject) => {
        audio.onended = resolve;
        audio.onerror = reject;
        audio.play();
      });

      URL.revokeObjectURL(audioUrl);
    } catch (err) {
      console.error('Text-to-speech error:', err);
      setError(err instanceof Error ? err.message : 'Failed to play audio');
    } finally {
      setIsLoading(null);
    }
  }, []);

  return {
    speak,
    isLoading,
    error
  };
};