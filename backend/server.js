require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts');

// initialize express app
const app = express();

// middleware
app.use(cors()); // allow all origins
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/workouts', workoutRoutes);

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to DB');

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Server listening on port ' + process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    });