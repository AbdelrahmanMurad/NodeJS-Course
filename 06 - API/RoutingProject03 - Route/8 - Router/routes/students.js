const { Router } = require('express');

const router = Router();

router.get('/profile')
    .get('/grades')
    .get('/timetable');

module.exports = router;