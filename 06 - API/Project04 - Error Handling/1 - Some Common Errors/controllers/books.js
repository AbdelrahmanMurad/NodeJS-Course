const { dbConnection } = require('../configurations');
const { ObjectId } = require('bson');

const getBooks = (req, res, next) => {
    const pageNumber = parseInt(req.query.page);
    if (isNaN(pageNumber)) {
        res.status(400).json({
            status: false,
            message: 'you should send a page number'
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

    //? (1) Error Handling 
    if (!ObjectId.isValid(req.params.id)) {
        res.status(404).json({
            status: false,
            message: 'id is not valid'
        });
    }

    const _id = new ObjectId(req.params.id);
    dbConnection('books', async (collection) => {
        //? (2) Error Handling - try()catch()
        try {
            const book = await collection.findOne({ '_id': _id });
            if (!book) {
                res.status(404).json({
                    status: false,
                    message: 'resource not found'
                });
            }
            res.json(book);

        } catch (error) {
            res.status(500).json({
                status: false,
                message: "something went wrong"
            })
        }
    });
}

//exposing
module.exports = {
    getBooks, getBooksPageCount, getBookById
};