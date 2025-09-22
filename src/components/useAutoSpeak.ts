import { useEffect } from "react";
import { ElevenLabsService } from "@/services/elevenLabsService"; // adjust path if needed

export const useAutoSpeak = (text: string, language: string) => {
  useEffect(() => {
    if (!text) return;

    const playVoice = async () => {
      try {
        await ElevenLabsService.speak(text, language);
      } catch (err) {
        console.error("Auto-speak failed:", err);
      }
    };

    // Speak automatically when text changes
    playVoice();
  }, [text, language]);
};
