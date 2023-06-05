const express = require('express');

const app = express();

const courses = [
    { id: 1, name: 'JS' },
    { id: 2, name: 'css' },
    { id: 3, name: 'html' }
];

app.get('/', (req, res, next) => res.status(200).json(courses));

// Path Parameter وهاي بدها شغل تاني، بس احنا بدنا نوضح انو بنقدر نسخدم اكثر من  postIdملاحظة انو الكود المفروض يجيب ال
app.get('/users/:id/posts/:postId', (req, res, next) => {
    const id = req.params.id;
    const post = users.find(user => user.id == id);
    res.status(200).json(post);
})

app.get('/users', (req, res, next) => res.redirect('/'));

module.exports = app; 