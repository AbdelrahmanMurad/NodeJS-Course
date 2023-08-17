const { Router } = require('express');
const { authUserController } = require('../controllers')

const router = Router();

router.post('/signup', authUserController.signup)

module.exports = router;