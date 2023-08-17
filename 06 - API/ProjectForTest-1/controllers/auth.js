const createHttpError = require("http-errors");
const { User, Reviewer } = require('../Model');

const signup = async (req, res, next) => {
    const userData = req.body;

    const validation = User.validate(userData)
    if (validation.error) {
        return next(createHttpError(400, validation.error.message))
    }
    const user = new User(userData);

    try {
        const result = await user.isExist();
        if (result.check) {
            return next(createHttpError(409, result.message))
        }
    } catch (error) {
        return next(createHttpError(500, error.message))
    }

    user.save((status) => {
        if (status.status) {
            //fetch _user_id to make a user reviewer.
            const _user_id = status._user_id;
            const reviewer = new Reviewer({
                name: userData.name,
                _user_id: _user_id
            })
            reviewer.save((result) => {
                if (result.status) {
                    res.status(201).json({
                        status: true,
                        message: 'user has been created successfully'
                    })
                } else {
                    return next(createHttpError(500, 'user has been created but reviewer has not'))
                }
            })
        } else {
            return next(createHttpError(500, status.message))
        }
    });
}

module.exports = {
    signup
}