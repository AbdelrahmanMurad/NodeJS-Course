module.exports = (app) => {
    app.use('/courses', (req, res, next) => {
        const lang = req.query.lang;
        if (lang && (lang == 'en' || lang == 'ar')) {
            next();
        }
        res.status(400).json({ msg: 'lang is required' });
    });

    app.use('/courses', (req, res, next) => {
        //Some Check
        next();
    });
};