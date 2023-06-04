const { User } = require('../models');
const { createError } = require('http-errors');

const signup = (req, res, next) => {
    //استقبال البياانات عشان اضيف اليوزر اكاونت
    const userData = req.body;

    //validation => static
    const vali = User.validate();
    if (vali.error) {
        next(createError(400, vali.error.message));
    }

    //validationمدام الكومبايلر وصل هنا يبقى فش خطأ في ال
    //check existance => not static
    const user = new User(userData);

    user.isExist()
        .then(result => {
            if (result.check) {
                next(createError(409, result.message));
                //409 conflict => في تطابق
            }
            //you can save here after the result
            // user.save();
        })
        .catch(err => {
            next(createError(500, err.message));
            //500 internal server error => tryCatch جاي من 
        });

    //مدام في اخطاء احفظ اليوزر
    //save 
    user.save();

}