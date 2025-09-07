/**
 * Workout Routes Definition
 * Defines all HTTP endpoints for workout operations
 * Maps HTTP methods and URLs to corresponding controller functions
 */

const express = require('express');

// Import all controller functions that handle the business logic
const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

// Create Express router instance to define route handlers
const router = express.Router();

/**
 * ROUTE DEFINITIONS
 * Each route maps an HTTP method + path to a controller function
 */

// GET /api/workouts - Retrieve all workouts
router.get('/', getWorkouts);

// GET /api/workouts/:id - Retrieve a specific workout by ID
router.get('/:id', getWorkout);

// POST /api/workouts - Create a new workout
router.post('/', createWorkout);

// DELETE /api/workouts/:id - Delete a specific workout by ID
router.delete('/:id', deleteWorkout);

// PATCH /api/workouts/:id - Update a specific workout by ID
// Using PATCH (partial update) instead of PUT (full replacement)
router.patch('/:id', updateWorkout);

/**
 * Export the configured router
 * This will be imported in server.js and mounted at '/api/workouts'
 */
module.exports = router;