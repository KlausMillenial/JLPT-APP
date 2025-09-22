import React from "react";
import { Card } from "@/components/ui/card";
import DrawingCanvas from "./DrawingCanvas";

interface WritingCardProps {
  word: {
    japanese: string;
  };
  onGoBack: () => void;
}

const WritingCard: React.FC<WritingCardProps> = ({ word, onGoBack }) => {
  return (
    <Card className="gradient-primary text-primary-foreground shadow-card p-6 border-0">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-bold">✍️ Practice Writing</h2>
        <DrawingCanvas character={word.japanese} />
        <button
          onClick={onGoBack}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          ⬅ Go Back
        </button>
      </div>
    </Card>
  );
};

export default WritingCard;
