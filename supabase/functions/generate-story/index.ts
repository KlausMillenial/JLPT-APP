import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const headers = { ...corsHeaders, "Content-Type": "application/json" };

  const authHeader = req.headers.get("Authorization");
  console.log("🔑 Incoming Authorization:", authHeader);

  if (!authHeader) {
    return new Response(
      JSON.stringify({ error: "Missing Authorization header" }),
      { status: 401, headers }
    );
  }

  try {
    const { language, level, words, maxPhrases, mode, text } = await req.json();

    let prompt: string;

    if (mode === "translate") {
      if (!language || !text) {
        return new Response(
          JSON.stringify({ error: "Missing required fields for translation" }),
          { status: 400, headers }
        );
      }

      // ✅ Strict translation format: JSON array of translations
      prompt = `
Translate the following Japanese sentences into ${language}.
Return the result STRICTLY as a JSON array.
Each element must be ONLY the translated sentence, aligned with each input line.
Do not add explanations, numbering, or extra text.

Input:
${text}

Output format example:
[
  "The bird is flying in the sky.",
  "There is one foreign student.",
  "The slippers are different."
]
`;
    } else {
      if (!language || !level || !words) {
        return new Response(
          JSON.stringify({ error: "Missing required fields for generation" }),
          { status: 400, headers }
        );
      }

      prompt = `
You are a Japanese tutor.

Generate a short story in JSON format. 

Rules:
- JLPT level: ${level}
- Allowed vocabulary: ${words.join("、")}
- You must ONLY use these words. Do not add or invent other vocabulary.
- Length: EXACTLY ${maxPhrases} sentences. No more, no less.
- Each sentence must be short and simple.
- Each sentence must end with 。 and be separated logically.
- Do NOT add explanations, translations, or extra text.
- If ${level} is N5, ensure it is limited to 3 sentences maximum.

Return format (JSON array, no extra text):
[
  { "jp": "私は車を買いました。", "romaji": "watashi wa kuruma o kaimashita." },
  { "jp": "公園で遊びました。", "romaji": "kouen de asobimashita." }
]
`;
    }

    const anthropicKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!anthropicKey) {
      return new Response(
        JSON.stringify({ error: "Missing Anthropic API key" }),
        { status: 500, headers }
      );
    }

    const claudeResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": anthropicKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307",
        max_tokens: 500,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!claudeResponse.ok) {
      const errText = await claudeResponse.text();
      console.error("❌ Anthropic API error:", claudeResponse.status, errText);

      return new Response(
        JSON.stringify({
          error: "Anthropic API call failed",
          status: claudeResponse.status,
          details: errText,
        }),
        { status: 500, headers }
      );
    }

    const result = await claudeResponse.json();
    let story = result?.content?.[0]?.text || "⚠️ No story returned";

    let parsed: any;
    try {
      parsed = JSON.parse(story);
    } catch {
      console.warn("⚠️ Claude did not return valid JSON, falling back to plain text.");
      parsed = story;
    }

    if (mode !== "translate" && typeof parsed === "string") {
      const sentences = parsed
        .split(/(?<=[。！？\?])\s*|\n+/)
        .map((s) => s.trim())
        .filter(Boolean);

      if (level === "N5") {
        parsed = sentences.slice(0, 3).map((s) => ({ jp: s, romaji: "" }));
      } else if (maxPhrases) {
        parsed = sentences.slice(0, maxPhrases).map((s) => ({ jp: s, romaji: "" }));
      }
    }

    return new Response(JSON.stringify({ story: parsed }), { headers });
  } catch (err) {
    console.error("❌ Server error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: String(err) }),
      { status: 500, headers }
    );
  }
});
