const express = require('express');

const app = express();

const courses = [
    { id: 1, name: 'JS' },
    { id: 2, name: 'css' },
    { id: 3, name: 'html' }
];

/**
 
app.get('/courses', (req, res, next) => {

    //precondition
    const lang = req.query.lang;

    if (lang && (lang == 'en' || lang == 'ar')) {
        // in the if statement: lang means =>=> if there is lang. 
        res.status(200).json(courses);

    } else {

        res.status(400).json(
            { message: 'lang is required' }
        );
    }
});

 // Middlewareلذلك نقوم بكتابة هذا الكود في قسم ال ،Route حنضطر انكرر الكود في كل ،Route لو احنا محتاجين هذا الشرط في كل  

 */

//Middleware => use()
//use() is not for middleware just.
app.use('/courses', (req, res, next) => {
    const lang = req.query.lang;
    if (lang && (lang == 'en' || lang == 'ar')) {
        // Middlewareلاحظ الدائرة، هيك معناها هو في ال LOADING هيك الصفحة حتضل تعمل 
        // اللي تحت، شو الحل؟؟؟؟؟؟ Routeمش حيقدر يصل لل
        //Solution is next() fn => pass the request to the one after.
        // we need next() fn in middleware. (اجباري)
        next();
        // اللي تحت Routeهيك حيقدر يصل لل next() بعد ما استخدمنا 
    }
    res.status(400).json({ msg: 'lang is required' });
});

// we can use another middleware.
app.use('/courses', (req, res, next) => {
    //Some Check
    next();
});

// الترتيب مهم جدا جدا جدا

//fixed one first
app.get('/courses', (req, res, next) => {
    res.status(200).json(courses);
});

//changeable
app.get('/courses/:id', (req, res, next) => {
    const id = req.params.id;
    const course = courses.find(course => course.id == id);
    res.status(200).json(course);
})

app.get('/', (req, res, next) => {
    res.redirect('/courses');
})

module.exports = app; 