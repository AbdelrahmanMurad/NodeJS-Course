const express = require('express');
const middlewares = require('./middlewares'); //index.js => default
const routes = require('./routes');

const app = express();

middlewares(app);

routes(app);

module.exports = app; 