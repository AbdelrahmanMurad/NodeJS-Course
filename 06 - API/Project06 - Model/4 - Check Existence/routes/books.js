const { Router } = require('express');
const { booksController } = require('../controllers');

const router = Router();

router.get('/', booksController.getBooks)
    .get('/pages', booksController.getBooksPageCount)
    .get('/:id', booksController.getBookById);

module.exports = router;