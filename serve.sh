#!/bin/bash
# Simple local server script for Jekyll site
# This uses Python's built-in HTTP server to serve your site locally

echo "🌐 Starting local web server for your website..."
echo "📂 Serving from: $(pwd)/_site"
echo "🔗 Open: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Check if _site directory exists
if [ ! -d "_site" ]; then
    echo "⚠️  Warning: _site directory not found"
    echo "You may need to build your site first with Jekyll"
    echo "For now, serving the current directory..."
    python3 -m http.server 8000
else
    cd _site && python3 -m http.server 8000
fi
