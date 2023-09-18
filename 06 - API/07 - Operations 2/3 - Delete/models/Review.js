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

    // لانها كلمة محجوزة deleteب Fnيفضل عدم تسمية ال
    // remove اذا نسمي 
    // static => why ?? => will not use object => we will use data
    static remove(_id, cb) {
        dbConnection('reviews', async (collection) => {
            try {
                //delete => delete multipe documents
                //deleteOne => delete one document
                await collection.deleteOne({ _id })//or {_id: _id} 
                cb({ status: true })
                /**In dbConnection:
                 * if you will return just a status => handle the async/await by callback. 
                 * if you will return a status and data => handle the async/await by promise. 
                 */
            } catch (err) {
                cb({ status: false, message: err.message })
            }
        })
    }

    //getOne for remove (find/search first then remove)
    // static => why ?? => will not use object => we will use data
    static getOne(_id) {
        return new Promise((resolve, reject) => {
            dbConnection('reviews', async (collection) => {
                try {
                    const review = await collection.findOne({ _id })//or {_id: _id} 

                    if (review) {
                        resolve({ status: true, data: review })
                        /**In dbConnection:
                         * if you will return just a status => handle the async/await by callback. 
                         * if you will return a status and data => handle the async/await by promise. 
                         */
                    } else {
                        resolve({ status: false })
                    }
                } catch (err) {
                    reject({ status: false, message: err.message })
                }
            })
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