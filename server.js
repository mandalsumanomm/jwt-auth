require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
