const API_KEY = localStorage.getItem("a2ce0057b35668c6723c2aafe74eb43a819edd7a7b28dc3c63a9532196de6c89");

export const ElevenLabsService = {
  async speak(text: string, language: string = "english") {
    if (!API_KEY) {
      console.error("No ElevenLabs API key found");
      return;
    }

    try {
      const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": API_KEY,
        },
        body: JSON.stringify({
          text,
          voice_settings: { stability: 0.5, similarity_boost: 0.5 },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio");
      }

      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      await audio.play();
    } catch (err) {
      console.error("Error in ElevenLabsService.speak:", err);
    }
  },
};
