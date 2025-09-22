import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { TranslationService } from "@/services/translationService";

// Sentence limits per JLPT level
const maxSentencesByLevel: Record<string, number> = {
  N5: 3,
  N4: 5,
  N3: 8,
  N2: 12,
  N1: 20,
};

interface StoryGeneratorProps {
  level: string;
  vocabulary: VocabularyWord[];
}

export const StoryGenerator: React.FC<StoryGeneratorProps> = ({ level, vocabulary }) => {
  const [story, setStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    const apiKey = const apiKey = TranslationService.getApiKey();

    if (!apiKey) {
      toast.error("You must set your OpenAI API key to generate stories!");
      return;
    }

    const words = vocabulary.map(w => w.japanese).slice(0, 20); // take 20 max to avoid overload
    const maxSentences = maxSentencesByLevel[level] || 5;

    const prompt = `
      Write a very short story in Japanese using these words: ${words.join(", ")}.
      The story must have at most ${maxSentences} sentences.
      After each sentence, provide:
      - Hiragana reading
      - English translation
    `;

    setIsLoading(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,   // ✅ uses the key set via ApiKeyDialog
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      const generated = data.choices?.[0]?.message?.content || "No story generated.";
      setStory(generated);
      toast.success("Story generated!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate story.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">📖 Story Generator ({level})</h2>
      <p className="mb-4">Generate a story with up to {maxSentencesByLevel[level]} sentences using your learned vocabulary.</p>
      <Button onClick={handleGenerate} disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate Story"}
      </Button>

      {story && (
        <Textarea
          className="mt-6 w-full h-64"
          readOnly
          value={story}
        />
      )}
    </div>
  );
};
