const { User } = require('../models');
const createError = require('http-errors');

const signup = async (req, res, next) => {
    const userData = req.body;

    const vali = User.validate(userData);
    if (vali.error) {
        return next(createError(400, vali.error.message));
    }

    const user = new User(userData);


    try {
        const result = await user.isExist();
        if (result.check) {
            // next(createHttpError(409, result.message)) // you need to use return keyword
            return next(createHttpError(409, result.message))
        }
    } catch (error) {
        return next(createHttpError(500, error.message))
    }

    // user.isExist()
    //     .then((result) => {
    //         if (result.check) {
    //            return next(createHttpError(409, result.message))
    //         }
    //     })
    //     .catch(error => next(createHttpError(500, error.message)))
    // هذا الكود فيه مشكلة

    user.save((status) => {
        if (status.status) {
            res.status(201).json({
                status: true,
                message: "user has been created successfully"
            })
        } else {
            return next(createError(500, status.message))
        }
    });
}

module.exports = {
    signup
};