const { Router } = require('express');

const router = Router();

router.get('/profile')
    .get('/grades')
    .get('/timetable');
    // Where is the prefix /student ??
    // in index.js file:     app.use('/student', studentRouter);

module.exports = router;