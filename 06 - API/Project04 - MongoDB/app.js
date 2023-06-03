const express = require('express');

const app = express();

app.get('/student', (req, res, next) => {
    res.send('<h3>Welcome to Student Page</h3>');
    //http://localhost:3000/student
});

app.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Home Page</h1>');
})



module.exports = app; 