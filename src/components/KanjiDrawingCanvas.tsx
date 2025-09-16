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
      width: 300,
      height: 300,
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
    <div className={`flex flex-col gap-4 ${className}`}>
      {targetKanji && (
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Tracez ce kanji :</h3>
          <div className="text-4xl font-bold text-primary mb-2">{targetKanji}</div>
        </div>
      )}
      
      {/* Canvas Drawing Area */}
      <div className="border-2 border-border rounded-lg overflow-hidden bg-background shadow-lg">
        <canvas 
          ref={canvasRef} 
          className="block cursor-crosshair"
          style={{ touchAction: 'none' }}
        />
      </div>

      {/* Drawing Controls */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Taille du pinceau :</label>
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-xs text-muted-foreground">{brushSize}px</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Couleur :</label>
          <div className="flex gap-2 items-center">
            <input
              type="color"
              value={brushColor}
              onChange={(e) => setBrushColor(e.target.value)}
              className="w-12 h-8 border border-border rounded cursor-pointer"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBrushColor('#000000')}
              className="text-xs"
            >
              Noir
            </Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleDrawingMode}
          className="flex items-center gap-2"
        >
          <Palette className="h-4 w-4" />
          Mode
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleClear}
          className="flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Effacer
        </Button>
        
        <Button
          variant="default"
          size="sm"
          onClick={handleSave}
          className="flex items-center gap-2"
        >
          Sauvegarder
        </Button>
      </div>

      {/* Instructions */}
      <div className="text-xs text-muted-foreground text-center bg-muted p-2 rounded">
        💡 Tracez avec votre souris ou doigt. Utilisez les contrôles pour ajuster la taille et couleur.
      </div>
    </div>
  );
};