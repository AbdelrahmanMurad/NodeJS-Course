const { User } = require('../models');
const { createError } = require('http-errors');

/** signup() method
 * 1- request data.
 * 2- validation.
 * 3- check existance. (you can save user here, in then() after result. [because its promise])
 * 4- save data.
 */

const signup = (req, res, next) => {
    //استقبال البياانات عشان اضيف اليوزر اكاونت
    const userData = req.body;

    //validation => static
    const vali = User.validate(userData);
    if (vali.error) {
        // you should type 'return' keyword
        // next(createError(400, vali.error.message)); // thats wrong
        return next(createError(400, vali.error.message));
    }

    //validationمدام الكومبايلر وصل هنا يبقى فش خطأ في ال
    //Here we need to make instance to use isExist() method that check existance. (not static)
    const user = new User(userData);

    user.isExist()
        .then(result => {
            if (result.check) { //result.check == true
                return next(createError(409, result.message));
                //409 conflict => في تطابق
            }
            //you can save here after the result
            // user.save();
        })
        .catch(err => {
            return next(createError(500, err.message));
            //500 internal server error => tryCatch جاي من 
        });

    //مدام فش اخطاء احفظ اليوزر
    //save 
    user.save();

}

module.exports = {
    signup
};