// supabase/functions/generate-story/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import OpenAI from "https://deno.land/x/openai@v4.5.0/mod.ts";

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

serve(async (req) => {
  try {
    const { level, words, targetLanguage, maxPhrases } = await req.json();

    const prompt = `
You are a JLPT tutor. 
Use only JLPT ${level} vocabulary (examples: ${words.slice(0, 40).join(", ")}).
Write a story in Japanese with max ${maxPhrases} phrases.
After each Japanese sentence, translate into ${targetLanguage}.
Format like:

Japanese: [sentence]
${targetLanguage}: [translation]
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const story = completion.choices[0].message.content;
    return new Response(JSON.stringify({ story }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
});
