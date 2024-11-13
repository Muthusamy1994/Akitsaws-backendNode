const express = require('express');
const mongoose = require('mongoose');
// const routes = require('./routes/routes');

require('dotenv').config();

const app = express();

const mongoURI = process.env.DB_CONNECTION;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));
  
  PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });