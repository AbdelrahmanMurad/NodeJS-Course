const express = require('express');
const routes = require('./routes');

const app = express();

/**
 * Error handling for promises
 */
process.on('unhandledRejection', (reason) => {
    console.log(reason);
    process.exit(1);
}); 

routes(app);

module.exports = app;