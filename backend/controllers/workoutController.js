/**
 * Workout Controller
 * Contains all the business logic for handling workout-related HTTP requests
 * Each function corresponds to a specific API endpoint operation
 */

const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

/**
 * GET /api/workouts
 * Retrieve all workouts from the database
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getWorkouts = async (req, res) => {
    try {
        // Find all workouts and sort by creation date (newest first)
        const workouts = await Workout.find({}).sort({createdAt: -1});
        
        // Send successful response with workouts data
        res.status(200).json(workouts);
    } catch (error) {
        // Handle any database errors
        res.status(400).json({error: error.message});
    }
}

/**
 * GET /api/workouts/:id
 * Retrieve a single workout by its ID
 * @param {Object} req - Express request object (contains id in params)
 * @param {Object} res - Express response object
 */
const getWorkout = async (req, res) => {
    // Extract id from request parameters
    const {id} = req.params;

    // Validate if the provided id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Could not find workout'});
    }

    try {
        // Find workout by ID
        const workout = await Workout.findById(id);

        // Check if workout exists
        if (!workout) {
            return res.status(404).json({error: 'Could not find workout'});
        }

        // Send successful response with workout data
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

/**
 * POST /api/workouts
 * Create a new workout
 * @param {Object} req - Express request object (contains workout data in body)
 * @param {Object} res - Express response object
 */
const createWorkout = async (req, res) => {
    // Extract workout data from request body
    const {title, load, reps} = req.body;

    try {
        // Create new workout document in database
        const workout = await Workout.create({title, load, reps});
        
        // Send successful response with created workout
        res.status(200).json(workout);
    } catch (error) {
        // Handle validation errors or database issues
        res.status(400).json({error: error.message});
    }
}

/**
 * DELETE /api/workouts/:id
 * Delete a workout by its ID
 * @param {Object} req - Express request object (contains id in params)
 * @param {Object} res - Express response object
 */
const deleteWorkout = async (req, res) => {
    const {id} = req.params;

    // Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Could not find workout'});
    }

    try {
        // Find and delete workout by ID
        const workout = await Workout.findByIdAndDelete({_id: id});

        // Check if workout was found and deleted
        if (!workout) {
            return res.status(404).json({error: 'Could not find workout'});
        }

        // Send successful response with deleted workout data
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

/**
 * PATCH /api/workouts/:id
 * Update an existing workout by its ID
 * @param {Object} req - Express request object (contains id in params and update data in body)
 * @param {Object} res - Express response object
 */
const updateWorkout = async (req, res) => {
    const {id} = req.params;

    // Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Could not find workout'});
    }

    // Find and update workout with new data
    // ...req.body spreads all properties from request body
    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    // Check if workout was found
    if (!workout) {
        return res.status(404).json({error: 'Could not find workout'});
    }

    // Send successful response with updated workout data
    res.status(200).json(workout);
}

/**
 * Export all controller functions
 * These will be imported and used in the routes file
 */
module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}