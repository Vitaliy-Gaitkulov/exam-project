const db = require('../models/index');
const CONSTANTS = require('../../constants');
const contestQueries = require('./queries/contestQueries');
const mailer = require('../services/nodemailer');

const bannedOffer = async (offerId) => {
  const rejectedOffer = await contestQueries.updateOffer(
    { status: CONSTANTS.OFFER_STATUSES.BANNED },
    { id: offerId }
  );
  return rejectedOffer;
};

const pendingOffer = async (offerId) => {
  const pendingOffer = await contestQueries.updateOffer(
    { status: CONSTANTS.OFFER_STATUSES.PENDING },
    { id: offerId }
  );
  return pendingOffer;
};

module.exports.getAllOffers = async (req, res, next) => {
  try {
    const {
      pagination
    } = req;

    const offers = await db.Offer.findAndCountAll({
      where: { status: CONSTANTS.OFFER_STATUSES.MODERATION },
      ...pagination
    });

    const users = await db.User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });

    const offerData = offers.rows.map(offer => {
      for (let i = 0; i < users.length; i++) {
        if (offer.dataValues.userId === users[i].dataValues.id) {
          return (offer.dataValues = {
            ...offer.dataValues,
            user: users[i].dataValues,
          });
        }
      }
    });

    res.send({ data: { offers: offerData, paginateCount: offers.count } });
  } catch (err) {
    next(err);
  }
};

module.exports.setOfferStatusModeration = async (req, res, next) => {
  const {offerId, command, email} = req.body
  const offer = await db.Offer.findOne({
    where: { id: offerId }
  });
  let transaction;
  if (command === 'banned') {
    try {
      const offer = await bannedOffer(offerId);
      const message = {
        to: email,
        subject: 'Offer status changed',
        html: `<h1>Оффер "${offer.text}" не прошел модерацию</h1>`,
      };
      mailer(message);
      res.send(offer);
    } catch (err) {
      next(err);
    }
  } else if (req.body.command === 'pending') {
    try {
      const resolveModerationOffer = await pendingOffer(req.body.offerId);
      const message = {
        to: email,
        subject: 'Offer status changed',
        html: `<h1>Оффер "${offer.text}" прошел модерацию</h1>`,
      };
      mailer(message);
      res.send(resolveModerationOffer);
    } catch (err) {
      next(err);
    }
  }
};
