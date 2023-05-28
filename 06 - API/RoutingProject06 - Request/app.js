const express = require('express');

const app = express();

app.get('/courses', (req, res, next) => {

    //*1. get parameters

    console.log(req.query);
    //try: ?timezone=asia$lang=en in the search bar.
    // it will print in the terminal
    const lang = req.query.lang;
    console.log(`lang is ${lang}`);
    //dont forget to reconnect => ctrl c.

    console.log(`--------------------------------`);

    //*2. get headers
    console.log(req.headers);
    const host = req.headers.host;
    console.log(`host is ${host}`);

    /**important note
     * There is another way to get headers:
     *      --- First one: req.headers.host
     *          - Here, the object for headers convert the upperCase to lowerCase.
     *      --- Second one: req.get('Host')
     *          - If you want it upperCase use this way.
     *          - and if it was more than one word, it will be like this: Content-Type.
    */
   
    console.log(`--------------------------------`);
    const acceptEncoding = req.get('Accept-Encoding');
    console.log(`accept encoding is ${acceptEncoding}.`);



    //json response
    res.status(200).json(
        [
            { name: 'Java', credit: 3 },
            { name: 'web', credit: 2 }
        ]
    );
})

module.exports = app; 