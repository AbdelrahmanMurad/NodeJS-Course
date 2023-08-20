const express = require('express');

module.exports = (app) => {
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
}