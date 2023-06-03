const express = require('express');

const app = express();

app.get('/', (req, res, next) => {

    res.status(200).json(
        [
            { id: 1, name: 'JS' },
            { id: 2, name: 'css' },
            { id: 3, name: 'html' }
        ]
    );
})

/**
 //TODO(1): get the course from id (Get Parameter)
app.get('/courses/byId', (req, res, next) => {

    const courses = [
        { id: 1, name: 'JS' },
        { id: 2, name: 'css' },
        { id: 3, name: 'html' }
    ];

    const id = req.query.id;

    const course = courses.find(course => course.id == id);
    res.status(200).json(course);

    
    //Note:
    // const course = courses.find((course) => { course.id == id });
    // thats wrong, you have to write:
    // (course) => { return course.id == id }
    // or
    // course => course.id == id (shortcut)
     

})

//TODO(2): get the course from id (Path Parameter)
app.get('/courses/:id', (req, res, next) => {

    const courses = [
        { id: 1, name: 'JS' },
        { id: 2, name: 'css' },
        { id: 3, name: 'html' }
    ];

    const id = req.params.id;

    const course = courses.find(course => course.id == id);

    res.status(200).json(course);
})

 */

//?Try the code from comment part here...
app.get('/courses/byId', (req, res, next) => {

    const courses = [
        { id: 1, name: 'JS' },
        { id: 2, name: 'css' },
        { id: 3, name: 'html' }
    ];

    const id = req.query.id;

    const course = courses.find(course => course.id == id);
    res.status(200).json(course);

    
    //Note:
    // const course = courses.find((course) => { course.id == id });
    // thats wrong, you have to write:
    // (course) => { return course.id == id }
    // or
    // course => course.id == id (shortcut)
     

})




module.exports = app; 