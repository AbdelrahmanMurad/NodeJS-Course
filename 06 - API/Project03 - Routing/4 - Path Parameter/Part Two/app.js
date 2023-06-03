const express = require('express');

const app = express();

app.get('/', (req, res, next) => {

    res.status(200).json(
        [
            { id: 1, name: 'Abood' },
            { id: 2, name: 'Ahmad' },
            { id: 3, name: 'Mohammed' }
        ]
    );
})

// Path Parameter وهاي بدها شغل تاني، بس احنا بدنا نوضح انو بنقدر نسخدم اكثر من  postIdملاحظة انو الكود المفروض يجيب ال
app.get('/users/:id/posts/:postId', (req, res, next) => {

    const users = [
        { id: 1, name: 'Abood' },
        { id: 2, name: 'Ahmad' },
        { id: 3, name: 'Mohammed' }
    ];

    const id = req.params.id;

    const post = users.find(user => user.id == id);

    res.status(200).json(post);
})

app.get('/users', (req, res, next) => {
    res.redirect('/');
});

module.exports = app; 