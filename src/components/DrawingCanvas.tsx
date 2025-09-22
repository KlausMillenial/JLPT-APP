import React, { useRef, useEffect } from "react";

const DrawingCanvas: React.FC<{ character?: string }> = ({ character }) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Dessine le kanji en gris clair si fourni
if (character) {
  ctx.font = "70px serif";
  ctx.fillStyle = "white"; // texte blanc
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(character, canvas.width / 2, canvas.height / 2);
}



    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    let drawing = false;

    const startDrawing = (e: MouseEvent) => {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    const draw = (e: MouseEvent) => {
      if (!drawing) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    };

    const stopDrawing = () => {
      drawing = false;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, []);

  return <canvas ref={canvasRef} width={300} height={300} className="border" />;
};

export default DrawingCanvas;
