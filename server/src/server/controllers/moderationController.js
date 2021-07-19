const db = require('../models/index');
const CONSTANTS = require('../../constants');

module.exports.getAllOffers = async (req, res, next) => {
  try {
    const {
      pagination
    } = req;

    const offers = await db.Offer.findAndCountAll({
      where: { status: CONSTANTS.OFFER_STATUSES.MODERATION },
      ...pagination
    });

    console.log(pagination);

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
