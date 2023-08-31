const { Router } = require('express');
const { studentController } = require('../controllers');

const router = Router();

router.get('/profile', studentController.getProfile)
    .get('/grades', studentController.getGrades)
    .get('/timetable', studentController.getTimeTable);

module.exports = router;