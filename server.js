const express = require('express');

const app = express();
// Login routes
app.use('/login', require('./routes/login'));

// Listen for requests
const port =  process.env.port || 4000;
app.listen(port, function () {
    console.log('now listening for request');
})