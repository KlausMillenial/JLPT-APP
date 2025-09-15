// Configuration for ElevenLabs API
// Since we're using Supabase integration, the API key should be stored in Supabase secrets
// For client-side TTS, we'll need to get it through a secure endpoint

export const ELEVENLABS_CONFIG = {
  // For now, users should input their API key in the app
  // This will be improved with proper Supabase edge function integration
  apiKey: localStorage.getItem('elevenlabs_api_key') || '',
  apiUrl: 'https://api.elevenlabs.io/v1',
  defaultModel: 'eleven_multilingual_v2',
  voices: {
    japanese: '9BWtsMINqrJLrRacOk9x', // Aria - multilingual
    english: 'EXAVITQu4vr4xnSDxMaL',   // Sarah
    french: 'FGY2WhTYpPnrIDTdsKH5'     // Laura
  }
};

export const setElevenLabsApiKey = (apiKey: string) => {
  localStorage.setItem('elevenlabs_api_key', apiKey);
};

export const getElevenLabsApiKey = () => {
  return localStorage.getItem('elevenlabs_api_key') || '';
};