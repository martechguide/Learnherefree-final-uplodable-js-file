import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from dist/public (production build)
app.use(express.static(path.join(__dirname, '../dist/public')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Medical Education Platform is running',
    timestamp: new Date().toISOString(),
    environment: 'production'
  });
});

// API routes placeholder
app.get('/api/*', (req, res) => {
  res.json({ 
    message: 'API endpoint not implemented yet',
    path: req.path,
    method: req.method
  });
});

// Catch-all handler: serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public/index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  });
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Medical Education Platform running on port ${port}`);
  console.log(`🌐 Access URL: http://learnherefree.online:${port}`);
  console.log(`📅 Started at: ${new Date().toISOString()}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});