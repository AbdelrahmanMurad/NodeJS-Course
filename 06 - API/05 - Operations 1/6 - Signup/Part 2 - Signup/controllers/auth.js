const { User } = require('../models');
const createError = require('http-errors');

const signup = (req, res, next) => {
    const userData = req.body;

    const vali = User.validate(userData);
    if (vali.error) {
        return next(createError(400, vali.error.message));
    }

    const user = new User(userData);
    user.isExist()
        .then(result => {
            if (result.check) {
                return next(createError(409, result.message));
            }
            // save here or after the isExist fn is done.
            /*
                user.save((status) => {
                    if (status.status) {
                    //201 success for created user, inserted user
                    res.status(201).json({
                        status: true,
                        message: "user has been created successfully"
                    })
                    } else {
                        next(createError(500, status.message))
                    }
                }); 
            */
        })
        .catch(err => {
            return next(createError(500, err.message));
        });

    //or save here
    //insert user => save()
    user.save((status) => {
        if (status.status) {
            //201 success for created user, inserted user
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