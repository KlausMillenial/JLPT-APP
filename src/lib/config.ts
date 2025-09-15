// Configuration for ElevenLabs API
// Since we're using Supabase integration, the API key should be stored in Supabase secrets
// For client-side TTS, we'll need to get it through a secure endpoint

export const ELEVENLABS_CONFIG = {
  // For now, users should input their API key in the app
  // This will be improved with proper Supabase edge function integration
  get apiKey() {
    const key = localStorage.getItem('elevenlabs_api_key') || '';
    console.log('Config Debug - Getting API key:', key ? 'found' : 'not found');
    return key;
  },
  apiUrl: 'https://api.elevenlabs.io/v1',
  defaultModel: 'eleven_multilingual_v2',
  voices: {
    japanese: 'TX3LPaxmHKxFdv7VOQHJ', // Liam - better for Japanese
    english: 'EXAVITQu4vr4xnSDxMaL',   // Sarah
    french: 'FGY2WhTYpPnrIDTdsKH5'     // Laura
  }
};

export const setElevenLabsApiKey = (apiKey: string) => {
  if (apiKey && !apiKey.startsWith('sk_')) {
    throw new Error('Invalid ElevenLabs API key format. ElevenLabs keys start with "sk_"');
  }
  localStorage.setItem('elevenlabs_api_key', apiKey);
  
  // Dispatch custom event to notify components
  window.dispatchEvent(new CustomEvent('elevenlabs-key-updated', { 
    detail: { apiKey } 
  }));
};

export const getElevenLabsApiKey = () => {
  return localStorage.getItem('elevenlabs_api_key') || '';
};

export const isValidElevenLabsKey = (key: string): boolean => {
  return key.length > 0 && key.startsWith('sk_');
};