const { Router } = require('express');
const { booksController } = require('../controllers');

const router = Router();

router.get('/', booksController.getBooks)
    .get('/pagesNumber', booksController.getPagesNumber)
    .get('/:id', booksController.getBookById);

module.exports = router;