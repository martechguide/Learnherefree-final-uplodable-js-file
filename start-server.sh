#!/bin/bash

# Kill any existing Node.js processes
pkill -f "node server"

# Navigate to project directory
cd /htdocs/learnherefree.online

# Set environment variables for VPS MySQL
export PORT=5000
export NODE_ENV=production
export DATABASE_URL="mysql://lhfuser:Golu%4091700@localhost:3306/lhfmedical"

# Create log files
touch /htdocs/learnherefree.online/app-debug.log
touch /htdocs/learnherefree.online/startup.log

# Start the production server
nohup node server/production-index.js > /htdocs/learnherefree.online/app-debug.log 2>&1 &

# Log startup info
echo "$(date): Production server starting on port 5000" >> /htdocs/learnherefree.online/startup.log
echo "$(date): Database: MySQL (lhfmedical)" >> /htdocs/learnherefree.online/startup.log
echo "$(date): PID: $!" >> /htdocs/learnherefree.online/startup.log
echo "$(date): URL: http://learnherefree.online:5000" >> /htdocs/learnherefree.online/startup.log