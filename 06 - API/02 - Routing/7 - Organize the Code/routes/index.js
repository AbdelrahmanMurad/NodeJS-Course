/**We need to import express:
 * 1- الطريقة المعتادة const app = express();
 *      - ولكن هيك بصير معرفة مرتين
 * 2- props => (app)
 *      - نستخدم هذه الطريقة لتجنب التعريف مرتين
 */

const courses = [
    { id: 1, name: 'JS' },
    { id: 2, name: 'css' },
    { id: 3, name: 'html' }
];

module.exports = (app) => {
    app.get('/courses', (req, res, next) => {
        res.status(200).json(courses);
    });

    app.get('/courses/:id', (req, res, next) => {
        const id = req.params.id;
        const course = courses.find(course => course.id == id);
        res.status(200).json(course);
    })

    app.get('/', (req, res, next) => {
        res.redirect('/courses');
    })
}