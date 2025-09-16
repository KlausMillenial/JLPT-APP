import React, { useEffect, useRef, useState } from 'react';
import { Canvas as FabricCanvas } from 'fabric';
import { Button } from './ui/button';
import { Eraser, RotateCcw, Palette } from 'lucide-react';
import { toast } from 'sonner';

interface KanjiDrawingCanvasProps {
  targetKanji?: string;
  onDrawingComplete?: (imageData: string) => void;
  className?: string;
}

export const KanjiDrawingCanvas: React.FC<KanjiDrawingCanvasProps> = ({
  targetKanji,
  onDrawingComplete,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#000000');

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 400,
      height: 400,
      backgroundColor: '#ffffff',
      isDrawingMode: true,
    });

    // Wait for canvas to be ready before configuring brush
    setTimeout(() => {
      if (canvas.freeDrawingBrush) {
        canvas.freeDrawingBrush.color = brushColor;
        canvas.freeDrawingBrush.width = brushSize;
      }
    }, 0);

    // Add event listener for drawing completion
    canvas.on('path:created', () => {
      if (onDrawingComplete) {
        const imageData = canvas.toDataURL({
          format: 'png',
          quality: 1,
          multiplier: 1
        });
        onDrawingComplete(imageData);
      }
    });

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!fabricCanvas?.freeDrawingBrush) return;

    fabricCanvas.freeDrawingBrush.color = brushColor;
    fabricCanvas.freeDrawingBrush.width = brushSize;
  }, [brushColor, brushSize, fabricCanvas]);

  const handleClear = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = '#ffffff';
    fabricCanvas.renderAll();
    toast.success('Canvas effacé !');
  };

  const handleSave = () => {
    if (!fabricCanvas) return;
    const imageData = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1
    });
    
    // Create download link
    const link = document.createElement('a');
    link.download = `kanji-${targetKanji || 'drawing'}.png`;
    link.href = imageData;
    link.click();
    
    toast.success('Dessin sauvegardé !');
  };

  const toggleDrawingMode = () => {
    if (!fabricCanvas) return;
    fabricCanvas.isDrawingMode = !fabricCanvas.isDrawingMode;
    toast.info(fabricCanvas.isDrawingMode ? 'Mode dessin activé' : 'Mode sélection activé');
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {targetKanji && (
        <div className="text-center bg-muted/30 p-3 rounded-lg">
          <h3 className="text-sm font-medium mb-1">Tracez ce kanji :</h3>
          <div className="text-6xl font-bold text-primary">{targetKanji}</div>
        </div>
      )}
      
      {/* Canvas Drawing Area */}
      <div className="border-2 border-border rounded-lg overflow-hidden bg-background shadow-lg">
        <canvas 
          ref={canvasRef} 
          className="block cursor-crosshair w-full h-auto max-w-full"
          style={{ touchAction: 'none' }}
        />
      </div>

      {/* Compact Controls */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="flex flex-col">
          <label className="font-medium mb-1">Taille:</label>
          <input
            type="range"
            min="2"
            max="15"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="w-full h-2"
          />
          <span className="text-center text-muted-foreground">{brushSize}px</span>
        </div>
        
        <div className="flex flex-col">
          <label className="font-medium mb-1">Couleur:</label>
          <div className="flex gap-1">
            <input
              type="color"
              value={brushColor}
              onChange={(e) => setBrushColor(e.target.value)}
              className="w-8 h-8 border border-border rounded cursor-pointer"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBrushColor('#000000')}
              className="text-xs px-2 py-1 h-8"
            >
              Noir
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <div className="grid grid-cols-2 gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={handleClear}
              className="text-xs px-2 py-1 h-8"
            >
              <RotateCcw className="h-3 w-3" />
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleSave}
              className="text-xs px-2 py-1 h-8"
            >
              Save
            </Button>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-xs text-muted-foreground text-center bg-muted/50 p-2 rounded">
        💡 Tracez avec votre souris ou doigt
      </div>
    </div>
  );
};