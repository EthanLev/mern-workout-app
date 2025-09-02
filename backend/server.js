require('dotenv').config();

const express = require('express');

// initialize express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// test route
app.get('/', (req, res) => {
    res.json({mssg: 'Test'});
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT);
})