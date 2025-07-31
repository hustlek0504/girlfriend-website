#!/bin/bash
# Build script for Vercel deployment

echo "Building girlfriend website..."

# Create necessary directories if they don't exist
mkdir -p public
mkdir -p public/images
mkdir -p public/song

# Copy all files to public directory
cp *.html public/
cp *.css public/
cp *.js public/
cp -r images/* public/images/ 2>/dev/null || true
cp -r song/* public/song/ 2>/dev/null || true
cp _redirects public/
cp vercel.json public/

echo "Build completed successfully!"
echo "Files ready for deployment:"
ls -la public/ 