const studentRouter = require('./students');

const courses = [
    { id: 1, name: 'JS' },
    { id: 2, name: 'css' },
    { id: 3, name: 'html' }
];

module.exports = (app) => {
    app.get('/courses', (req, res, next) => {
        res.status(200).json(courses);
    });

    app.get('/courses/:id', (req, res, next) => {
        const id = req.params.id;
        const course = courses.find(course => course.id == id);
        res.status(200).json(course);
    })

    app.get('/', (req, res, next) => {
        res.redirect('/courses');
    })

    //routes group = Router
    app.use('/student', studentRouter);
    // const studentRouter = require('./students');
    // '/students' => prefix
}

/**
 ===============================================
    Note
 ===============================================
    // routes group = Router
    // Router الى مجموعات من باب التنظيم Routesفصل ال
    app.get('/student/profile');//one route
    app.get('/student/grades');//one route
    app.get('/student/timetable');//one route
    // /student => This is called prefix


===============================================
File students.js
===============================================

 const { Router } = require('express');
 const router = Router();

 router.get('/profile')
       .get('/grades')
       .get('/timetable');
    // Router for Student Routesوعمل  Routesتم جمع ال
   
module.exports = router;

 */