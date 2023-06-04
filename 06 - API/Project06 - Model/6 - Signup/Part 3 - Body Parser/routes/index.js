const bookRouter = require('./books');
const authRouter = require('./auth');

module.exports = (app) => {

    app.get('/test', (req, res, next) => {
        res.status(200).json({ "msg": "Test!!!" });
    });

    app.get('/', (req, res, next) => {
        res.send('<h1>Hello user, this is Homepage</h1>');
    });

    //books => prefix
    app.use('/books', bookRouter);

    //auth => prefix
    app.use('/auth', authRouter)
}