const { Router } = require('express');
const { booksController } = require('../controllers');

const router = Router();

// router.get('/', booksController.getBooks()); => getBooks() => Error
router.get('/', booksController.getBooks);
/**
 * When to use ()???
 * - when you need to execute the fn.
 * ==================================
 * - in this case you should not use (), you should just put it as a refrece. (not execute)
 */

module.exports = router;