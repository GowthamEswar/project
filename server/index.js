// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '..', 'mango.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = [
        'http://localhost:5173',
        process.env.CLIENT_ORIGIN,
      ].filter(Boolean);
      if (!origin || allowed.includes(origin)) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);
app.use(express.json());

// Sample health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Sri Yaali Foundation India API is running.' });
});

// API routes
app.use('/api/admin', require('./routes/admin'));
const auth = require('./middleware/auth');
// Temporarily removing auth for testing - add back when ready for production
app.use('/api/volunteers', require('./routes/volunteers'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/donors', require('./routes/donors'));
app.use('/api/feedback', require('./routes/feedback'));

// Serve React build (client) in production
const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientDistPath));

// SPA fallback to index.html for non-API routes
app.get('*', (req, res) => {
  // If the request starts with /api, let API routes handle 404s
  if (req.path.startsWith('/api')) return res.status(404).json({ error: 'Not found' });
  return res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Connect to MongoDB if MONGO_URI is set; otherwise start server without DB
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

const { MONGO_URI } = process.env;
if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
      startServer();
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      console.warn('Starting server without database due to connection error.');
      startServer();
    });
} else {
  console.warn('MONGO_URI not set. Starting server without database.');
  startServer();
} 