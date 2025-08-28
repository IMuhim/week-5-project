const { Router } = require('express');
const attemptController = require('../controllers/attempts');
const attemptRouter = Router();

attemptRouter.post('/', attemptController.addAttempt);
attemptRouter.get("/user/:user_id", attemptController.getAttemptsByUser);



module.exports = attemptRouter;