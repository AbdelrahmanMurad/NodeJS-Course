const express = require('express');

const app = express();

const courses = [
    { id: 1, name: 'JS' },
    { id: 2, name: 'css' },
    { id: 3, name: 'html' }
];

app.get('/', (req, res, next) => res.status(200).json(courses))

/**
 //TODO(1): get one course from id (Get Parameter)
app.get('/courses/byId', (req, res, next) => {
    const id = req.query.id;
    const course = courses.find(course => course.id == id);
    res.status(200).json(course);
})
/courses/byId?id=1
/courses/byId?id=2
/courses/byId?id=3

//TODO(2): get one course from id (Path Parameter) => better
app.get('/courses/:id', (req, res, next) => {
    const id = req.params.id;
    const course = courses.find(course => course.id == id);
    res.status(200).json(course);
})
/courses/1
/courses/2
/courses/3
*/

//?Try the comment code here...
app.get('/courses/:id', (req, res, next) => {
    const id = req.params.id;
    const course = courses.find(course => course.id == id);
    res.status(200).json(course);
})

module.exports = app;

/*
Note:
 const course = courses.find((course) => { course.id == id });
 thats wrong, you have to write:
 (course) => { return course.id == id }
 or
 course => course.id == id (shortcut)

*/