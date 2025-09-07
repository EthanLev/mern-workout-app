/**
 * Workout Model Definition
 * Defines the structure and validation rules for workout documents in MongoDB
 */

const mongoose = require('mongoose');

// Extract Schema constructor from mongoose
const Schema = mongoose.Schema;

/**
 * Define the workout document schema
 * This defines the structure of each workout document in the database
 */
const workoutSchema = new Schema({
    // Exercise title/name - required string field
    title: { 
        type: String, 
        required: true 
    },
    
    // Weight/load used in the exercise - required number field
    load: { 
        type: Number, 
        required: true 
    },
    
    // Number of repetitions - required number field
    reps: { 
        type: Number, 
        required: true 
    }
}, { 
    // Enable automatic timestamp fields (createdAt, updatedAt)
    timestamps: true 
});

/**
 * Create and export the Workout model
 * - First parameter: 'workout' is the singular name (MongoDB will pluralize to 'workouts')
 * - Second parameter: the schema definition
 * This model provides an interface to interact with the workouts collection
 */
module.exports = mongoose.model('workout', workoutSchema);