const { Router } = require('express');
const { booksController } = require('../controllers');
const { auth } = require('../middlewares');

const router = Router();

router.get('/', auth, booksController.getBooks) //param2 in route => middleware
    .get('/pages', booksController.getBooksPageCount)
    .get('/:id', booksController.getBookById);

module.exports = router;