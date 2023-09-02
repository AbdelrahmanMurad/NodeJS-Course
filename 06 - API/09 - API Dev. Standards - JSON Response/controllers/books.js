const { dbConnection } = require('../configurations');
const { ObjectId } = require('bson');
const createHttpError = require('http-errors');
const { returnJson } = require('../modules/json_response');

const getBooks = (req, res, next) => {
    const pageNumber = parseInt(req.query.page);
    if (isNaN(pageNumber)) {
        const error = createHttpError(400, 'You should send a page number');
        next(error);
    }

    const limit = 10;
    const skip = (pageNumber - 1) * limit;

    dbConnection('books', async (collection) => {
        const books = await collection.find({}).limit(limit).skip(skip).toArray();
        // res.json(books);
        return returnJson(res, 200, true, "", books);
    });
};

const getBooksPageCount = (req, res, next) => {
    dbConnection('books', async (collection) => {
        const limit = 10;
        const count = await collection.count({}); // documents number
        const pages = Math.ceil(count / limit);

        // res.json({
        //     pages: pages
        // })
        return returnJson(res, 200, true, "", { pages: pages });
    });
}


const getBookById = (req, res, next) => {

    if (!ObjectId.isValid(req.params.id)) {
        const error = createHttpError(404, 'Id is not valid');
        next(error);
    }

    const _id = new ObjectId(req.params.id);
    dbConnection('books', async (collection) => {
        try {
            const book = await collection.findOne({ '_id': _id });
            if (!book) {
                const error = createHttpError(404, 'Resource not found');
                next(error);
            }
            // res.json(book);
            return returnJson(res, 200, true, "", book);

        } catch (err) {
            const error = createHttpError(500, err.message);
            next(error);
        }
    });
}

//exposing
module.exports = {
    getBooks, getBooksPageCount, getBookById
};