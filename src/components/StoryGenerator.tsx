import { useState } from "react";

export function StoryGenerator({ level, vocabulary, allVocabulary, onBack, onLevelChange }) {
  const [storyLines, setStoryLines] = useState<{ jp: string; romaji: string; translation?: string }[]>([]);
  const [displayMode, setDisplayMode] = useState<"jp" | "translation">("jp");

  const [loading, setLoading] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState("english");

  const SUPABASE_URL = "http://localhost:54321";
  const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

  const limits = { N5: 3, N4: 5, N3: 8, N2: 12, N1: 15 };

  // ✅ Generate Japanese story (with romaji)
  async function generateStory() {
    setLoading(true);
    try {
      const shuffled = [...vocabulary].sort(() => Math.random() - 0.5);
      const selectedWords = shuffled.slice(0, 10).map((w) => w.japanese);

      const response = await fetch(SUPABASE_URL + "/functions/v1/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          level,
          language: targetLanguage,
          words: selectedWords,
          maxPhrases: level === "N5" ? 3 : (limits[level] || 5),
          format: "json-with-romaji",
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();

      let lines: { jp: string; romaji: string }[] = [];
      if (Array.isArray(data.story)) {
        // already structured
        lines = data.story;
      } else if (typeof data.story === "string") {
        // fallback: split string into lines
        lines = data.story.split("\n").map((line: string) => ({
          jp: line.trim(),
          romaji: "",
        }));
      }

      setStoryLines(lines);
      setDisplayMode("jp");
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setStoryLines([{ jp: "⚠️ Error generating story", romaji: "" }]);
    }
    setLoading(false);
  }

  // ✅ Translate existing story
  async function translateStory() {
    setLoading(true);
    try {
      const text = storyLines.map((l) => l.jp).join("\n");

      const response = await fetch(SUPABASE_URL + "/functions/v1/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          mode: "translate",
          language: targetLanguage,
          text,
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();

      let translations: string[] = [];
      if (Array.isArray(data.story)) {
        translations = data.story;
      } else if (typeof data.story === "string") {
        translations = data.story.split("\n");
      }

      const merged = storyLines.map((line, i) => ({
        ...line,
        translation: translations[i] || "",
      }));

      setStoryLines(merged);
      setDisplayMode("translation");
    } catch (err) {
      console.error("❌ Translate error:", err);
    }
    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">📖 Story Generator</h2>

      <button
        onClick={onBack}
        className="mb-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
      >
        ← Back to Home
      </button>

      {/* Level Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose JLPT Level:</label>
        <div className="flex gap-2 flex-wrap">
          {["N5", "N4", "N3", "N2", "N1"].map((lvl) => {
            const hasWords = allVocabulary.some((w) => w.level === lvl);
            return (
              <button
                key={lvl}
                onClick={() => hasWords && onLevelChange(lvl)}
                disabled={!hasWords}
                className={`px-4 py-2 rounded-lg border transition ${
                  lvl === level
                    ? "bg-blue-500 text-white"
                    : hasWords
                    ? "bg-gray-100 hover:bg-gray-200"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {lvl}
              </button>
            );
          })}
        </div>
      </div>

      {/* Language Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose translation language:</label>
        <select
          className="border rounded-md p-2 w-full"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="spanish">Spanish</option>
          <option value="chinese">Chinese</option>
          <option value="korean">Korean</option>
          <option value="vietnamese">Vietnamese</option>
        </select>
      </div>

      <button
        onClick={generateStory}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Story"}
      </button>

      {storyLines.length > 0 && (
        <>
          <div className="mt-6 p-4 border rounded-md bg-gray-50 space-y-3">
  {storyLines.map((line, idx) => (
    <div key={idx}>
      {/* Always show Japanese */}
      <p className="text-lg">{line.jp}</p>

      {/* Always show Romaji */}
      {line.romaji && <p className="text-gray-500 italic">{line.romaji}</p>}

      {/* Only show translation if in translation mode */}
      {displayMode === "translation" && line.translation && (
        <p className="text-blue-600">{line.translation}</p>
      )}
    </div>
  ))}
</div>


          <button
            onClick={translateStory}
            disabled={loading}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
          >
            {loading ? "Translating..." : "Translate"}
          </button>

          <button
            onClick={() => setDisplayMode("jp")}
            className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Show Japanese
          </button>
        </>
      )}
    </div>
  );
}
