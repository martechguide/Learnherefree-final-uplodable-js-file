// Production Server - Medical Education Platform
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist/public')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    platform: 'Medical Education Platform',
    domain: 'learnherefree.online',
    timestamp: new Date().toISOString()
  });
});

// API endpoints
app.get('/api/status', (req, res) => {
  res.json({
    platform: 'Medical Education Platform',
    features: [
      '5 Medical Batches',
      '13 Subjects', 
      '29 Educational Videos',
      'Google OAuth Authentication',
      'Hindi UI Messages',
      'Email-based OTP System'
    ],
    status: 'production',
    deployment: 'ready'
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🩺 Medical Education Platform running on port ${PORT}`);
  console.log(`🌐 Platform: learnherefree.online`);
  console.log(`✅ Status: Production Ready`);
});