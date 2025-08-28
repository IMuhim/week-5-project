const { Router } = require('express');
const loginController = require('../controllers/logins');
const loginRouter = Router();

loginRouter.post('/', loginController.login);


module.exports = loginRouter;