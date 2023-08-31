const { reviewSchema } = require('./review');
const { userSchema, loginSchema } = require('./user');

module.exports = {
    userVali: userSchema,
    loginVali: loginSchema,
    reviewVali: reviewSchema
}