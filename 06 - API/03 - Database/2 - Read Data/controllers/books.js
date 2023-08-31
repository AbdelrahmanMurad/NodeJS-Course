const { dbConnection } = require('../configurations');

const getBooks = (req, res, next) => {
    dbConnection('books', async (collection) => {
        const books = await collection.find({}).toArray();
        //toArray() returns array of objects.
        res.json(books);
    });
};

module.exports = {
    getBooks
};