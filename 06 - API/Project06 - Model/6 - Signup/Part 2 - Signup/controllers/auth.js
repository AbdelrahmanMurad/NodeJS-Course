const { User } = require('../models');
const createError = require('http-errors');

const signup = (req, res, next) => {
    const userData = req.body;

    //validation => static
    const vali = User.validate();
    if (vali.error) {
        next(createError(400, vali.error.message));
    }

    //check existance => not static
    const user = new User(userData);

    user.isExist()
        .then(result => {
            if (result.check) {
                next(createError(409, result.message));
                //409 conflict => في تطابق
            }
            //as we said before, you can save() here 
        })
        .catch(err => {
            next(createError(500, err.message));
            //500 internal server error => tryCatch جاي من 
        });

    //insert user => save()
    user.save((status) => {
        if (status.status) {
            //201 success for created user, inserted user
            res.status(201).json({
                status: true,
                message: "user has been created successfully"
            })
        } else {
            createError(500, status.message);
        }
    });

}

module.exports = {
    signup
};