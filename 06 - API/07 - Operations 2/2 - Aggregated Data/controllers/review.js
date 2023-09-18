//**
const { Review, Book } = require('../models')
const createError = require('http-errors')
const { ObjectId } = require("bson");
/**Steps:
 * 1- get reviewData from body.
 * 2- get _reviewer_id from token.
 * 3- validation & if validation.error
 * 4- create instance.
 * 5- convert id type to ObjectId.
 * 6- save()
 */
const add = (req, res, next) => {
    //1- get reviewData from body.
    const reviewData = req.body

    //2- get _reviewer_id from token.
    reviewData._reviewer_id = req._reviewer_id

    //3- validation & if validation.error
    const validation = Review.validate(reviewData)
    if (validation.error) {
        return next(createError(400, validation.error.message))
    }

    //4- create instance.
    const review = new Review(reviewData)

    //5- convert id type to ObjectId.
    review.reviewData._reviewer_id = new ObjectId(review.reviewData._reviewer_id)
    review.reviewData._book_id = new ObjectId(review.reviewData._book_id)
    //remember this: any type id in mongoDB needs to be ObjectId.

    //6- save()
    review.save((result) => {
        if (!result.status) {
            return next(createError(500))
        }
        //**
        //update after save
        //refreshAvgRating => static
        Book.refreshAvgRating(review.reviewData._book_id)

        res.status(200).json({
            status: true,
            data: review
        })
    })
}

module.exports = {
    add
}