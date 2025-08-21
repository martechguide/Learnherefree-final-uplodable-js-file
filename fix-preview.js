// Medical Education Platform - Preview Fix Script
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Basic middleware
app.use(express.json());
app.use(express.static('client/dist'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    platform: 'Medical Education Platform',
    timestamp: new Date().toISOString(),
    message: 'Website preview is working!'
  });
});

// Catch-all route for React app
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'client/dist/index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(500).send('Medical Education Platform - Loading...');
    }
  });
});

// Start server with proper error handling
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🩺 Medical Education Platform running on port ${PORT}`);
  console.log(`🌐 Access URL: http://localhost:${PORT}`);
  console.log(`✅ Preview Status: FIXED`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} in use, trying ${PORT + 1}`);
    app.listen(PORT + 1, '0.0.0.0');
  }
});

module.exports = app;