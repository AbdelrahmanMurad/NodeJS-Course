const Joi = require('@hapi/joi');
//npm i @hapi/joi => libraries (there is many)

const schema = Joi.object({
    //why its an object?? because of the variables in class User is object.
    //same variables in class User.
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().alphanum().min(4).max(10).required(),
    password: Joi.string()
        .pattern(new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$'))
        // .message('The password does not match our regular expression')
        .required()
    /**Some Conditions:
     * 1) The first rule you need is: Specifying the Type of data. (e.g. string())
     * 2) any rule you need.
     * 3) The Last rule if you want it is: required().
     * - The rules apply in order.
     * - every rule has a message.
     * - you can use .message() if you want to print the msg. (after the specified rule)
     * - if you did not use the .message() => there will be a default message.
     */
});


module.exports = schema;