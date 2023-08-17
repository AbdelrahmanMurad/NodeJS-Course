const { dbConnection } = require('../configurations');
const { ObjectId } = require('bson');
const createError = require('http-errors');

const getBooks = (req, res, next) => {
    const pageNumber = parseInt(req.query.page);
    if (isNaN(pageNumber)) {
        //TODO: (1) Error Handling - Global Error Handler - next() - go to app.js
        const error = createError(400, 'You should send a page number');
        next(error);
    }

    const limit = 10;
    const skip = (pageNumber - 1) * limit;

    dbConnection('books', async (collection) => {
        const books = await collection.find({}).limit(limit).skip(skip).toArray();
        res.json(books);
    });
};

const getBooksPageCount = (req, res, next) => {
    dbConnection('books', async (collection) => {
        const limit = 10;
        const count = await collection.count({}); // documents number
        const pages = Math.ceil(count / limit);

        res.json({
            pages: pages
        })
    });
}


const getBookById = (req, res, next) => {

    if (!ObjectId.isValid(req.params.id)) {
        //TODO: (2) Error Handling - Global Error Handler - next() - go to app.js
        const error = createError(404, 'Id is not valid');
        next(error);
    }

    const _id = new ObjectId(req.params.id);
    dbConnection('books', async (collection) => {
        try {
            const book = await collection.findOne({ '_id': _id });
            if (!book) {
                //TODO: (3) Error Handling - Global Error Handler - next() - go to app.js
                const error = createError(404, 'Resource not found');
                next(error);
            }
            res.json(book);

        } catch (err) {
            //TODO: (4) Error Handling - Global Error Handler - next() - go to app.js
            const error = createError(500, err.message);
            next(error);
        }
    });
}

//exposing
module.exports = {
    getBooks, getBooksPageCount, getBookById
};