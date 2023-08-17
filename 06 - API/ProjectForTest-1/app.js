const express = require('express');
const middlewares = require('./middlewares');
const routes = require('./routes');
const app = express();

/**
 * Handling all Promises in one time.
 */
process.on('unhandledRejection', (reason) => {
    console.log(reason);
    process.exit(1);
    // num!=0 => Prpcess is done with Fail.
    // 0 => Prpcess is done with Success.
})

/**
 * Middlewares
 */
middlewares(app);

/**
 * Routes
 */
routes(app);

/**
 * Not Found handler
 */
// app.use((req, res, next) => {
//     const error = createError(404);
//     next(error);
// //res
//     // console.log('here');
// });

/**
 * Handling All Error
 */
app.use((error, req, res, next) => {
    res.status(error.statusCode).json({
        status: false,
        message: error.message
    });
});

module.exports = app;