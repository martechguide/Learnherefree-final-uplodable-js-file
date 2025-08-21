#!/bin/bash

# Medical Education Platform - Deployment Script
echo "🚀 Deploying Medical Education Platform..."

# Step 1: Build production files
echo "📦 Building production files..."
npm run build

# Step 2: Create production-ready package.json
echo "📝 Creating production package.json..."
cat > package-prod.json << 'EOF'
{
  "name": "medical-education-platform",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js"
  },
  "dependencies": {
    "express": "^4.19.0"
  }
}
EOF

# Step 3: Copy essential files
echo "📁 Copying deployment files..."
mkdir -p deployment
cp -r dist deployment/
cp package-prod.json deployment/package.json

# Step 4: Install production dependencies
echo "📦 Installing production dependencies..."
cd deployment && npm install

echo "✅ Deployment package ready in ./deployment directory"
echo "🌐 To deploy: Use Replit deployment with 'node dist/index.js' as start command"