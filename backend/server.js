/**
 * Main server file for the Workout App backend
 * Sets up Express server, database connection, and middleware
 */

// Load environment variables from .env file into process.env
require('dotenv').config();

// Import required dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts');

// Initialize Express application
const app = express();

/**
 * MIDDLEWARE CONFIGURATION
 * Middleware functions execute during the request-response cycle
 */

// Enable CORS (Cross-Origin Resource Sharing) for all routes
// Allows frontend (different port) to communicate with backend
app.use(cors());

// Parse incoming JSON requests and make data available in req.body
app.use(express.json());

// Custom logging middleware - logs all incoming requests
app.use((req, res, next) => {
    console.log(req.path, req.method); // Log the request path and HTTP method
    next(); // Pass control to the next middleware function
});

/**
 * ROUTES CONFIGURATION
 * Mount workout routes at '/api/workouts' endpoint
 * All workout-related requests will be handled by workoutRoutes
 */
app.use('/api/workouts', workoutRoutes);

/**
 * DATABASE CONNECTION AND SERVER START
 * Connect to MongoDB using Mongoose, then start the server
 */
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB database');

        // Start the server only after successful database connection
        app.listen(process.env.PORT, () => {
            console.log('Server listening on port ' + process.env.PORT);
        });
    })
    .catch((error) => {
        console.log('Database connection failed:', error);
    });