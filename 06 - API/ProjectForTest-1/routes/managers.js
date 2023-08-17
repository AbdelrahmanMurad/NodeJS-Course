const { Router } = require("express");
const { managersController } = require('../controllers');

const router = Router();

router.get('/a', managersController.getOperationA)
    .get('/b', managersController.getOperationB)
    .get('/c', managersController.getOperationC);
//     app.use('/managers', managersRouter);

module.exports = router;