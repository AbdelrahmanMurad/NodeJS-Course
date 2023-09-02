const { dbConnection } = require('../configurations')
const { reviewVali } = require("../validators");

/**4 rows:
 * 1- book id
 * 2- reviewer id
 * 3- rating
 * 4- comment
 */
class Review {
    constructor(reviewData) {
        this.reviewData = reviewData
    }

    save(cb) {
        dbConnection('reviews', async (collection) => {
            try {
                //checking if there are _book_id & _reviewer_id by upsert operation.
                await collection.updateOne(
                    {
                        _book_id: this.reviewData._book_id,
                        _reviewer_id: this.reviewData._reviewer_id
                    },
                    {
                        $set: {
                            _book_id: this.reviewData._book_id,
                            _reviewer_id: this.reviewData._reviewer_id,
                            rating: this.reviewData.rating,
                            comment: this.reviewData.comment
                        }
                    },
                    {
                        upsert: true
                    }
                )

                cb({
                    status: true
                })
            } catch (err) {
                cb({
                    status: false,
                    message: err.message
                })
            }
        })
    }

    static validate(reviewData) {
        try {
            const validationResult = reviewVali.validate(reviewData);
            return validationResult;
        } catch (error) {
            return false;
        }
    }
}

module.exports = Review