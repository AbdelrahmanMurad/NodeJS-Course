const jwt = require('jsonwebtoken')
const createHttpError = require('http-errors')
const { readFileSync } = require('fs')

module.exports = (req, res, next) => {
    //1) request: get Token from the Header Authorization.
    const authHeader = req.get('Authorization');

    //2) check if there is Token.
    if (!authHeader) {
        return next(createHttpError(401));
    }

    //3) split the token from Bearer word.
    const token = authHeader.split(' ')[1];

    //4) decode operation
    //first we need the secretKey to access the token.
    const secretKey = readFileSync('./configurations/private.key');
    try {
        //a) verifying that token is authorized. => [verify(token, secretKey)]
        //verify(token, secretKey) => output: payload (user data)
        const decode = jwt.verify(token, secretKey)
        //b) store user id & reviewer id in the request.
        req._user_id = decode._id;
        req._reviewer_id = decode._reviewer_id;
        next();
    } catch (error) {
        return next(createHttpError(401));
    }
}