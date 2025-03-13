// Duplicated Routes: https://youtu.be/V19wzfrwa58?list=PLE5Mq0Nw_Flr1kMDtWmQYmAfURQpH3r8H

const express = require('express');

const app = express();

const courses = [
    { id: 1, name: 'JS' },
    { id: 2, name: 'css' },
    { id: 3, name: 'html' }
];

// The fixed routes one First, then the dynamic routes.
app.get('/courses/all', (req, res, next) => {
    res.status(200).json(courses);
});

app.get('/courses/:id', (req, res, next) => {
    const id = req.params   .id;
    const course = courses.find(course => course.id == id);
    res.status(200).json(course);
})

// Try Replace the station of code. (Make the dynamic routes first => route ('/courses/all') shows nothing)

/**
 * Here we will face a problem, that is the compiler reads the first id from courses and shows it.
 * So, Any word in the search bar instead of (:id) will be considered as first id. 
 * In other hand, The compiler did not reach the Route ('/courses/all').
 *  - To solve it, make the Route ('/courses/all') before (:id). (fixed routes First, Cheangible Second)
 *      - So the Route can not be duplicated.
 *      - & This problem shows when the HTTP Method(get-post-...etc) is used in the two time.
 *          - That means if you used the same Route, and the cheangible Route was before the fixed routes one, but with diffrent HTTP Method, it wont be a problem. 
 */

module.exports = app; 