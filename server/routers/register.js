const { Router } = require('express');
const registerController = require('../controllers/register');
const registerRouter = Router();

registerRouter.post('/', registerController.register);


module.exports = registerRouter;