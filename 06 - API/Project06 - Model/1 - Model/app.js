const express = require('express');

const app = express();

app.get('/',(req, res, next) => res.send('<h1>Welcome to user website</h1>'));


module.exports = app;