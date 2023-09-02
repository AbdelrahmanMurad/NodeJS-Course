const { Router } = require('express')
const { reviewController } = require('../controllers')
const { auth } = require('../middlewares')

const router = Router()

// add review => post
router.post('/add', auth, reviewController.add)//param2 => middleware
    .delete('/delete/:id', auth, reviewController.remove)//param2 => middleware
//:id => path parameter

module.exports = router;
