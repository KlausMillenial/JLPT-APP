import React from 'react';

interface FuriganaTextProps {
  japanese: string;
  hiragana: string;
  className?: string;
}

export const FuriganaText: React.FC<FuriganaTextProps> = ({ 
  japanese, 
  hiragana, 
  className = "" 
}) => {
  return (
    <div className={`inline-block ${className}`}>
      <ruby className="text-base leading-relaxed">
        {japanese}
        <rt className="text-xs text-center block leading-none opacity-90 font-light">
          {hiragana}
        </rt>
      </ruby>
    </div>
  );
};