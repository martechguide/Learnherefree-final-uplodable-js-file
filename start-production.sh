#!/bin/bash

# Medical Education Platform - Production Startup Script
echo "🚀 Starting Medical Education Platform in Production Mode..."

# Set production environment
export NODE_ENV=production
export PORT=5000

# Build the application
echo "📦 Building application..."
npm run build

# Start production server
echo "🌐 Starting production server..."
node dist/index.js

echo "✅ Medical Education Platform running in production mode on port $PORT"