const { schema, loginSchema } = require('./user');

module.exports = {
    userVali: schema,
    loginVali: loginSchema
}