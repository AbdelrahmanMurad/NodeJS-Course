const express = require('express');
const middlewares = require('./middlewares'); //index.js => default
const routes = require('./routes'); //index.js => default

const app = express();

middlewares(app);

routes(app);

module.exports = app; 