const createHttpError = require('http-errors');
const AuthService = require('../services/authService');
const { User, RefreshToken } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const CONSTANTS = require('../../constants');
const mailer = require('../services/nodemailer');

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await User.findOne({
      where: { email },
    });

    if (user && (await user.comparePassword(password))) {
      const data = await AuthService.createSession(user);
      return res.status(201).send({ data });
    }
    next(createHttpError(401, 'Invalid credentials'));
  } catch (error) {
    next(error);
  }
};

module.exports.signUp = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    if (user) {
      const data = await AuthService.createSession(user);
      return res.status(201).send({ data });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
    const {
      body: { refreshToken }, // refresh token is not expired
    } = req;

    const refreshTokenInstance = await RefreshToken.findOne({
      where: { value: refreshToken },
    });

    if (!refreshTokenInstance) {
      return next(createHttpError(404, 'Token not found'));
    }
    const data = await AuthService.refreshSession(refreshTokenInstance);
    res.status(201).send({ data });
  } catch (error) {
    next(error);
  }
};

module.exports.refreshPassword = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      next(createHttpError(401, 'Invalid credentials'));
    }

    const hashPassword = await bcrypt.hash(password, CONSTANTS.SALT_ROUNDS);

    const tokenPass = jwt.sign(
      { email: email, password: hashPassword },
      'secret'
    );

    const message = {
      to: email,
      subject: 'Change password',
      html: `
          <h1>Подтвердите изменение пароля, перейдите по ссылке</h1>
          <a href="http://127.0.0.1:5000/password_reset/${tokenPass}/">Подтвердить</a>
          `
    };
    mailer(message);
    
    res.status(201).send({ data: 1 });
  } catch (error) {
    next(error);
  }
};

module.exports.refreshPasswordHash = async (req, res, next) => {
  try {
    const { hash } = req.params;

    const { email, password } = jwt.verify(hash, 'secret');

    const [rowsCount, [updatedUser]] = await User.update(
      { password: password },
      {
        where: { email },
        returning: true,
      }
    );

    if (rowsCount !== 1) {
      return next(createError(400, 'User cant be updated'));
    }

    res.status(201).send({ data: 'ok' });
  } catch (error) {
    next(error);
  }
};
