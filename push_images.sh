#!/bin/bash
set -e

IMG_DIR="images"
DEST_DIR="src/assets"

# Regroupe les images locales
IMAGES=($IMG_DIR/*.png)

# Taille du lot (réduit à 10 pour GitHub)
BATCH_SIZE=10
TOTAL=${#IMAGES[@]}

echo "🚀 Total $TOTAL images à pousser (lots de $BATCH_SIZE)..."

for ((i=0; i<$TOTAL; i+=$BATCH_SIZE)); do
  BATCH=("${IMAGES[@]:i:BATCH_SIZE}")
  echo "📦 Lot $((i/BATCH_SIZE+1)) : ${#BATCH[@]} images"

  for img in "${BATCH[@]}"; do
    fname=$(basename "$img")
    cp "$img" "$DEST_DIR/$fname"
    git add "$DEST_DIR/$fname"
  done

  git commit -m "Add images batch $((i/BATCH_SIZE+1))"
  git push origin main
done

echo "✅ Toutes les images ont été copiées et poussées !"

