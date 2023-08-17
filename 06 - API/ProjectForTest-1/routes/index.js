const managersRouter = require('./managers');
const booksRouter = require('./books');
const authUserRouter = require('./auth');

const employees = [
    { id: 1, name: 'Abaaas' },
    { id: 2, name: 'Ahmed' },
    { id: 3, name: 'Hamed' }
]

module.exports = (app) => {

    app.get('/employees', (req, res, next) => {
        res.status(200).json(employees);
    })

    app.get('/', (req, res, next) => res.redirect('/employees'))

    app.get('/employees/:id', (req, res, next) => {
        const id = req.params.id;
        const employee = employees.find((employee) => employee.id == id);
        res.status(200).json(employee);
    })

    app.use('/managers', managersRouter);
    // const managersRouter = require('./managers');
    app.use('/books', booksRouter);
    app.use('/auth', authUserRouter);
}