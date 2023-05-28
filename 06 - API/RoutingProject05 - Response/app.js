const express = require('express');

const app = express();

app.get('/student', (req, res, next) => {
    res.send('<h3>Welcome to Student Page</h3>');
});

app.get('/courses', (req, res, next) => {
    //json response
    res.status(200).json(
        [
            { name: 'Java', credit: 3 },
            { name: 'web', credit: 2 }
        ]
    );
    /**
    Status Code:
    - Success: return default 200
    - Fail: return default 500
    */
})

module.exports = app; 