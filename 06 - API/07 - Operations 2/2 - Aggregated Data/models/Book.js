const { dbConnection } = require('../configurations')

class Book {

    // static => will not use object => data
    static refreshAvgRating(_book_id) {
        //reviews collection to calculate the avg of rates.
        dbConnection('reviews', async (collection) => {
            //Ratingsحنسحب متوسط ال
            const reviews = await collection.find(
                { _book_id: _book_id }
            ).toArray()

            let sum = 0
            const count = reviews.length// numbers of reviews

            for (let i = 0; i < count; i++) {
                //check existance
                if (reviews[i].rating) {
                    sum += reviews[i].rating
                }
            }
            //المتوسط الحسابي
            const avg = sum / count

            //books collection to update the rates.
            dbConnection('books', async (collection) => {
                await collection.updateOne(//condition, add new data or modify on data
                    { _id: _book_id },
                    { $set: { avg_rating: avg } }
                )
            })
        })
    }
}

module.exports = Book