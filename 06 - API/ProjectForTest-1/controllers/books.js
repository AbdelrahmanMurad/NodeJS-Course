const { ObjectId } = require('bson');
const { dbConnection } = require('../configurations');
const createHttpError = require('http-errors');

const getBooks = (req, res, next) => {
    /** The Problem is that the First 10 books will show, even in page 2.
     * - We need to solve it, How??
     *   Page   Limit   Skip
     *    1       2      0
     *    2       2      2
     *    3       2      4
     *    4       2      6
     * So on.
     * Formula: (Page - 1) * limit = Skip
    */
    const page = parseInt(req.query.page);//=> Converts a string to an integer.
    const limit = 2;
    const skip = (page - 1) * limit;

    //Error Handling
    if (isNaN(page)) {
        const error = createHttpError(400, 'You need a page number');
        next(error);
    }

    dbConnection('books', async (collection) => {
        const books = await collection.find({}).limit(limit).skip(skip).toArray();
        res.json(books);
    })
}

const getPagesNumber = (req, res, next) => {
    dbConnection('books', async (collection) => {
        const limit = 2;
        const count = await collection.count({});// documents number (numburing how many pages we have)
        const pagesNumber = Math.ceil(count / limit);
        res.status(200).json({
            'pages number': pagesNumber
        });
    })
}

const getBookById = (req, res, next) => {
    const _id = new ObjectId(req.params.id);

    //Error Handling
    if (!ObjectId.isValid(req.params.id)) {
        const error = createHttpError(404, 'Id is not found')
        next(error);
    }

    dbConnection('books', async (collection) => {
        const book = await collection.findOne({ _id });
        //Handling Error - try()catch()
        try {
            if (!book) {
                const error = createHttpError(404, 'Book not Found');
                next(error)
            } else {
                res.json(book);
            }
        } catch (err) {
            const error = createHttpError(500, 'Someting went wrong');
            next(error);
        }
    })
}

module.exports = {
    getBooks,
    getPagesNumber,
    getBookById
}