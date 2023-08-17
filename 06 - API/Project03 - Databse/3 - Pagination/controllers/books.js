const { dbConnection } = require('../configurations');

const getBooks = (req, res, next) => {

    // const pageNumber = req.query.page; 
    // query is string => pageNumber will return a string. you need to convert it to integer value.
    const pageNumber = parseInt(req.query.page); //=> convert string to an integer value.

    if (isNaN(pageNumber)) {
        // 400 => bad request
        res.status(400).json({
            status: false,
            message: 'Bad Request - You should send a page number'
        })
    }

    const limit = 10;
    /** The Problem is that the First 10 books will show, even in page 2.
     * - We need to solve it, How??
     *   Page   Limit   Skip
     *    1       10      0
     *    2       10      10
     *    3       10      20
     *    4       10      30
     * So on.
     * Formula: (Page - 1) * limit = Skip
     */
    const skip = (pageNumber - 1) * limit;

    dbConnection('books', async (collection) => {
        const books = await collection.find({}).limit(limit).skip(skip).toArray();
        //toArray() returns array of objects.
        res.json(books);
    });
};

// pageبدنا نعرض عدد ال
// how many pages we have?
const getBooksPageCount = (req, res, next) => {
    dbConnection('books', async (collection) => {
        const limit = 10;
        const count = await collection.count({}); // documents number (numburing how many pages we have)
        const pages = Math.ceil(count / limit);

        res.json({
            pagesNumber: pages
        })
    });
}

module.exports = {
    getBooks, getBooksPageCount
};