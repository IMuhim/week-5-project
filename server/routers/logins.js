const { Router } = require('express');
const loginController = require('../controllers/logins');
const loginRouter = Router();

loginRouter.post('/', loginController.create);


module.exports = loginRouter;