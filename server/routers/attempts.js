const { Router } = require('express');
const attemptController = require('../controllers/attempts');
const attemptRouter = Router();

attemptRouter.post('/', attemptController.addAttempt);



module.exports = attemptRouter;