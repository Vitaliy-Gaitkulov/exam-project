const moderationRouter = require('express').Router();
const moderationController = require('../controllers/moderationController');
const paginate = require('../middlewares/paginate.mw');

moderationRouter.post(
  '/allOffers',
  paginate,
  moderationController.getAllOffers
);

module.exports = moderationRouter;
