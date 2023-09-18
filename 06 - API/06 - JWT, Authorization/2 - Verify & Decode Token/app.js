const express = require('express');
const routes = require('./routes');
const createHttpError = require('http-errors');
const middlewares = require('./middlewares');

const app = express();

/**
 * Error handling for promises
 */
process.on('unhandledRejection', (reason) => {
    console.log(reason);
    process.exit(1);
});

/**
 * Middlewares
 */
//**
//this is how to access to the global middleware.
middlewares.global(app);
//the auth middleware is in books.js (routes) => Example.
//بشكل مباشر routeبال middlewareربط ال
//الا بالتوكن routeوهذا معناه بقدرش افوت ال Token تم وضع فيه middleware اللي تم وضع فيه routeيعني هيك ال

/**
 * Routes
 */
routes(app);

/**
 * Not Found handler
 */
// app.use((req, res, next) => {
//     const error = createHttpError(404);
//     next(error);
// });


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