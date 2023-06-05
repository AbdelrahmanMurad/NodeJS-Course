const { dbConnection } = require('../configurations');
const { ObjectId } = require('bson');
const createError = require('http-errors');

const getBooks = (req, res, next) => {
    const pageNumber = parseInt(req.query.page);
    if (isNaN(pageNumber)) {
        //? (1) Error Handling - Error Object
        const error = createError(400, 'You should send a page number');
        // const error = createError(400);
        // default => will return text msg depending on status code.
        //404 => not found, 500 => internal server error. 
        res.status(error.statusCode).json({
            status: false,
            message: error.message
        })
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


const getBookById = (req, res, nex) => {

    if (!ObjectId.isValid(req.params.id)) {
        //? (2) Error Handling - Error Object
        const error = createError(404, 'Id is not valid');
        res.status(error.statusCode).json({
            status: false,
            message: error.message
        });
    }

    const _id = new ObjectId(req.params.id);
    dbConnection('books', async (collection) => {
        try {
            const book = await collection.findOne({ '_id': _id });
            if (!book) {
                //? (3) Error Handling - Error Object
                const error = createError(404, 'Resource not found');
                res.status(error.statusCode).json({
                    status: false,
                    message: error.message
                });
            }
            res.json(book);

        } catch (err) {
            //? (4) Error Handling - Error Object
            const error = createError(500, err.message);
            res.status(error.statusCode).json({
                status: false,
                message: error.message
            })
        }
    });
}

//exposing
module.exports = {
    getBooks, getBooksPageCount, getBookById
};