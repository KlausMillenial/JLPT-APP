import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VocabularyWord } from "@/data/vocabulary";
import { VoiceButton } from "./VoiceButton";
import { ElevenLabsService } from "@/services/elevenLabsService";
import DrawingCanvas from "./DrawingCanvas/DrawingCanvas";



type LanguageOption =
  | "english"
  | "french"
  | "german"
  | "vietnamese"
  | "chinese"
  | "korean"
  | "spanish";

interface VocabularyCardProps {
  word: VocabularyWord;
  language: LanguageOption;
  showJapaneseFirst?: boolean;
  onPractice?: () => void;  // ✅ add this line
}



export const VocabularyCard = ({ word, language, showJapaneseFirst = false, onPractice }: VocabularyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(showJapaneseFirst);

useEffect(() => {
  setIsFlipped(showJapaneseFirst);
}, [showJapaneseFirst]);


  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    setIsFlipped(!isFlipped);
  };

  const translation = word[language] || word.english;
  const exampleTranslation =
    word.examples[0]?.[language] || word.examples[0]?.english;

  // 🔊 joue la voix automatiquement au flip
  useEffect(() => {
    if (isFlipped && word.japanese) {
      ElevenLabsService.speak(word.japanese, "japanese");
    } else if (!isFlipped && translation) {
      ElevenLabsService.speak(translation, language);
    }
  }, [isFlipped, word, translation, language]);

  return (
    <div className="perspective-1000 w-full h-[400px] md:h-[500px] rounded-[1.2rem] overflow-hidden shadow-card bg-white">

     {/* Image toujours fixe */}
<div className="h-48 md:h-64 relative overflow-hidden">

  {word.imageUrl ? (
  <img
  src={word.imageUrl}
  alt={word.english}
  className="w-full h-full object-cover object-center"
/>



  ) : (
    <div className="w-full h-full flex items-center justify-center bg-primary/5">
      <span className="text-sm text-primary/60">No image</span>
    </div>
  )}
</div>

{/* Zone flip uniquement pour le texte */}
<div
  className={`card-flip-half cursor-pointer relative h-[240px] md:h-[280px] ${
    isFlipped ? "flipped" : ""
  }`}
  onClick={handleCardClick}
>




  {/* Recto (Traduction) */}
<Card className="card-front gradient-card shadow-card hover:shadow-card-hover transition-smooth p-0 border-0 h-full">
  <div className="p-4 flex flex-col items-center justify-start space-y-3 h-full">




      <div className="flex items-center gap-2">
       <h2 className="text-lg md:text-2xl font-bold text-primary break-words">
  {translation}
</h2>


        <VoiceButton text={translation} language={language} />
      </div>

      {word.examples[0] && (
        <div className="space-y-1 pt-2 border-t border-primary/20 w-full">

          <p className="text-xs text-muted-foreground">Example:</p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              {exampleTranslation}
            </p>
            <VoiceButton
              text={exampleTranslation}
              language={language}
              variant="ghost"
              size="icon"
            />
          </div>
        </div>
      )}
      <div className="mt-2 text-xs text-muted-foreground text-center">
        Click to reveal Japanese
      
      </div>
      </div>
    
  </Card>


         

  {/* --- Verso (Japonais) --- */}
 <Card className="card-back gradient-primary text-primary-foreground shadow-card p-3 md:p-4 border-0 h-full">
  <div className="flex flex-col items-center justify-start mt-2 space-y-1 h-full">

      <h2 className="text-base md:text-2xl font-bold leading-tight break-words">
        {word.japanese}
      </h2>

      <div className="flex items-center gap-1">
        <p className="text-sm text-white/90">{word.hiragana}</p>
        <VoiceButton text={word.hiragana} language="japanese" />
      </div>

      <p className="text-xs italic text-white/70 break-words">{word.romaji}</p>

      {word.examples[0] && (
        <div className="pt-1 border-t border-white/20 w-full text-center space-y-0.5">
          <p className="text-xs font-medium">Example:</p>
          <div className="flex items-center justify-center gap-1">
            <p className="text-base break-words">{word.examples[0].japanese}</p>
            <VoiceButton
              text={word.examples[0].hiragana}
              language="japanese"
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 opacity-70"
            />
          </div>
          <p className="text-xs italic opacity-70">{word.examples[0].romaji}</p>
        </div>
      )}

      {/* ✍️ Writing practice button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (onPractice) onPractice();
        }}
        className="w-full mt-1 px-2 py-1 bg-purple-600/70 hover:bg-purple-600 text-white text-xs rounded-md shadow transition"
      >
        ✍️ Practice on Canvas
      </button>
    </div>
  </Card>
</div>
</div>
);
};
