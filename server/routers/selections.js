const { Router } = require('express');
const selectionController = require('../controllers/selections');
const selectionRouter = Router();

selectionRouter.get('/', selectionController.showSelectionPage);
selectionRouter.get('/logout', selectionController.logout);



module.exports = selectionRouter;