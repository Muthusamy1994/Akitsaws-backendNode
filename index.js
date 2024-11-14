// index.js
import express from 'express';
import cors from 'cors';  // Optional: If you need to handle cross-origin requests
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js';
import exampleRoutes from './routes/routes.js';


const app = express();
connectDB();

// Middleware
app.use(cors());  // Optional
app.use(express.json());  // To parse JSON request bodies

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


// Example route import
// exampleRoutes(app)

app.use('', exampleRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
