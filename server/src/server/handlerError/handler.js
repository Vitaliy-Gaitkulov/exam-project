const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');
const { UniqueConstraintError } = require('sequelize');
const { logger } = require('./logger');

module.exports.tokenErrorHandler = (err, req, res, next) => {
  if (err instanceof TokenExpiredError) {
    return res.status(419).send('Token expired');
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).send('Invalid token');
  }

  next(err);
};

module.exports.sequelizeErrorHandler = (err, req, res, next) => {
  if (err instanceof UniqueConstraintError) {
    const {
      errors: [{ message }],
    } = err;
    return res.status(409).send({ message });
  }
  next(err);
};

module.exports.validationErrorHandler = () => {};

module.exports.basicErrorHandler = (err, req, res, next) => {
  logger(err);
  if (!err.message || !err.status) {
    return res.status(500).send('Server Error');
  }
  console.log(err);
  res.status(err.status).send(err.message);
};
