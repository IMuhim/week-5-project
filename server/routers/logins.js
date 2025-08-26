const { Router } = require('express');
const gameController = require('../controllers/game');
const gameRouter = Router();

gameRouter.get('/', gameController.show);


module.exports = gameRouter;