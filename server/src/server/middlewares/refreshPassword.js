const createHttpError = require('http-errors');
const AuthService = require('../services/authService');
const { User, RefreshToken } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const CONSTANTS = require('../../constants');
const mailer = require('../services/nodemailer');

module.exports.refreshPassword = async (req, res, next) => {
  try {
    //const signJWT = promisify(jwt.sign);
    const {
      body: { email, password },
    } = req;

    // const user = await User.findOne({
    //   where: { email },
    // });

    const hashPassword = await bcrypt.hash(password, CONSTANTS.SALT_ROUNDS);

    const tokenPass = jwt.sign(
      { email: email, password: hashPassword },
      'secret'
    );

    //const verify = jwt.verify(tokenPass, 'secret')

    //const pass = bcrypt.compare(verify.password, function(err, result){return "aaaaa";});

    const message = {
      to: email,
      subject: 'Congratulations! You are successfully registred on our site',
      html: `
          <h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>
          
          <i>данные вашей учетной записи:</i>
          <ul>
              <li>login: ${email}</li>
              <li><a href="http://127.0.0.1:5000/password_reset/${tokenPass}/">перейти</a></li>
          </ul>`,
    };
    mailer(message);
    //res.redirect('/sign-in')

    // if (user && (await user.comparePassword(password))) {
    //   const data = await AuthService.createSession(user);
    //   return res.status(201).send({ data });
    // }
    // next(createHttpError(401, 'Invalid credentials'));
    res.send({ data: 'oke' });
  } catch (error) {
    console.log('catched ,', error);
    next(error);
  }
};

module.exports.refreshPasswordHash = async (req, res, next) => {
  try {
    console.log('gfdsfsdfsd');
    const { hash } = req.params;

    const { email, password } = jwt.verify(hash, 'secret');

    const user = await User.findOne({
      where: { email },
    });

    // const [rowsCount, [updatedUser]] = await User.update({password: password}, {
    //   where: { email },
    //   returning: true,
    // });

    // const updatedUser = await User.update({password: password}, {
    //   where: { email },
    //   returning: true,
    // });

    const updatedUser = await User.findOne({
      where: { email },
    });

    console.log(updatedUser);

    // if (rowsCount !== 1) {
    //   console.log("error update");
    //   //return next(createError(400, 'User cant be updated'));
    // }

    // delete updatedUser.password;
    //updatedUser.password = undefined;

    res.send({ data: user });

    res.status(201).send({ data: 'oke' });
  } catch (error) {
    next(error);
  }
};
