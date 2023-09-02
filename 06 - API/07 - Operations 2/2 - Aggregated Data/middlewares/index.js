const express = require('express');

// make the module exports object of two functions, instead exporting a function.
module.exports = {
    global: (app) => {
        app.use('/employees', (req, res, next) => {
            const language = req.query.lang;
            if (language && (language == 'en' || language == 'ar')) {
                next();
            } else {
                const error = createHttpError(400, 'lang is required');
                next(error);
            }
        });

        app.use(express.json());
    },

    auth: require('./auth')
}