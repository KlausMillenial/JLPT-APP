import { useState, useCallback } from 'react';
import { ELEVENLABS_CONFIG } from '@/lib/config';

interface TextToSpeechOptions {
  text: string;
  language?: 'japanese' | 'english' | 'french';
}

export const useTextToSpeech = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const speak = useCallback(async ({ text, language = 'japanese' }: TextToSpeechOptions) => {
    if (!text.trim()) return;

    const apiKey = ELEVENLABS_CONFIG.apiKey;
    if (!apiKey) {
      setError('ElevenLabs API key not configured. Please add your API key in settings.');
      return;
    }

    const speechId = `${text}_${Date.now()}`;
    setIsLoading(speechId);
    setError(null);

    try {
      const voiceId = ELEVENLABS_CONFIG.voices[language];

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
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.0,
            use_speaker_boost: true
          }
        })
      });

      if (!response.ok) {
        throw new Error(`ElevenLabs API error: ${response.status}`);
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