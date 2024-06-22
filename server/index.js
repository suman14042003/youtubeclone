import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
import videoRoutes from './routes/video.js';
import commentsRoutes from './routes/comments.js';
import path from 'path';

dotenv.config();

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join('uploads')));

// CORS setup to allow requests from frontend
app.use(cors({ 
  origin: 'http://localhost:3000',
  credentials: true 
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.options('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
});

// Additional body-parser middleware
app.use(bodyParser.json());

// Base route for server health check
app.get('/', (req, res) => {
  res.send("Hello, the server is running!");
});

// Use routes for handling different endpoints
app.use('/user', userRoutes);
app.use('/video', videoRoutes);
app.use('/comment', commentsRoutes);

// Start the server on the specified port
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});

// Connect to MongoDB using mongoose
const DB_URL = process.env.CONNECTION_URL;
mongoose.connect(DB_URL)
  .then(() => {
    console.log('MongoDB database connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
