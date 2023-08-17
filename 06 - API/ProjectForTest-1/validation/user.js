const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string()
        .required(),
    username: Joi.string()
        .alphanum()
        .max(14)
        .min(7)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$'))
        // .message('password must match the regular expression')
        .required()
});

module.exports = schema;