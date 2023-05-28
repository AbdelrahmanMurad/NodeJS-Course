const express = require('express');

const app = express();

app.get('/student', (req, res, next) => {
    res.send('<h3>Welcome to Student Page</h3>');
});

/**
 * app.get('/student'
 * when the /student called link or endPoint(route)???
 * 
 * - link: if the application is not api.
 *  
 * - endPoint(route): if the application is api. 
 */


module.exports = app; 