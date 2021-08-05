const moderationRouter = require('express').Router();
const moderationController = require('../controllers/moderationController');
const paginate = require('../middlewares/paginate.mw');
const { checkModerationToken } = require('../middlewares/tokenMw');

moderationRouter.post(
  '/allOffers',
  checkModerationToken,
  paginate,
  moderationController.getAllOffers
);

moderationRouter.post(
  '/setOfferStatusModeration',
  checkModerationToken,
  moderationController.setOfferStatusModeration
);

module.exports = moderationRouter;
