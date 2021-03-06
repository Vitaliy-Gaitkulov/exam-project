const userRouter = require('express').Router()
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const userController = require('../controllers/userController');
const validators = require('../middlewares/validators');
const upload = require('../utils/fileUpload');

userRouter.post(
  '/pay',

  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  userController.payment
);

userRouter.post(
  '/changeMark',

  basicMiddlewares.onlyForCustomer,
  userController.changeMark
);

userRouter.post(
  '/updateUser',

  upload.uploadAvatar,
  userController.updateUser
);

userRouter.post(
  '/cashout',

  basicMiddlewares.onlyForCreative,
  userController.cashout
);

module.exports = userRouter