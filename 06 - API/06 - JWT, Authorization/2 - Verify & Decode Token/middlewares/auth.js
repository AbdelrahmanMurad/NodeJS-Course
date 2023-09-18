const jwt = require('jsonwebtoken')
const createHttpError = require('http-errors')
const { readFileSync } = require('fs')

/**Steps:
 * 1) request: get Token from the Header Authorization.
 * 2) check if there is Token.
 * 3) split the token from Bearer word.
 * 4) decode operation{
 *      a) verifying that token is authorized. => [verify(token, secretKey)]
 *      b) store user id & reviewer id in the request.
 * }
 * get - check - split - decode
 */

module.exports = (req, res, next) => {
    //1) request: get Token from the Header Authorization.
    const authHeader = req.get('Authorization');

    //2) check if there is Token.
    if (!authHeader) {
        return next(createHttpError(401));
    }

    //3) split the token from Bearer word.
    const token = authHeader.split(' ')[1];
    /**
     * Bearer           (TokenCode)
     * [0]     split        [1]
     */
    // Bearer used for Authentication Token, there is another types of Tokens not for Authentication.

    //4) decode operation
    //first we need the secretKey to access the token.
    const secretKey = readFileSync('./configurations/private.key');
    try {
        //a) verifying that token is authorized. => [verify(token, secretKey)]
        //verify(token, secretKey) => output: payload (user data)
        const decode = jwt.verify(token, secretKey)
        // if verified, add on the request that will come, _user_id & _reviewer_id.
        //b) store user id & reviewer id in the request.
        req._user_id = decode._id;
        req._reviewer_id = decode._reviewer_id;
        next();
    } catch (error) {
        return next(createHttpError(401));
    }
}

// now i have a problem that i cant make this middleware global in all application. because it will make it global at all requests (all project).
// and this middleware is just for Token.
// solution is in index.js (middlewares)