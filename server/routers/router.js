const { Router } = require('express');
const gameController = require('../controllers/game');
const gameRouter = Router();

gameRouter.get('/', gameController.show);
gameRouter.get('/:id', gameController.pull);
gameRouter.get('/:id', gameController.getSubject);


module.exports = gameRouter;