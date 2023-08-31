const express = require('express');
const routes = require('./routes');
const createError = require('http-errors');

const app = express();

/**
 * Error handling for promises
 */
process.on('unhandledRejection', (reason) => {
    console.log(reason);
    process.exit(1);
});

/**
 * Routes
 */
routes(app);

/**
 * TODO: Not Found handler
 */
app.use((req, res, next) => {
    const error = createError(404);
    next(error);
    console.log('here');
});


/**
 * Error handler
 */
app.use((error, req, res, next) => {
    res.status(error.statusCode).json({
        status: false,
        message: error.message
    });
});


module.exports = app;