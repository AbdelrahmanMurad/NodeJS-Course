const Joi = require('@hapi/joi')

const reviewSchema = Joi.object({
    _book_id: Joi.string().required(),
    _reviewer_id: Joi.string().required(),
    comment: Joi.string().required(),
    rating: Joi.number().required()
});

module.exports = reviewSchema