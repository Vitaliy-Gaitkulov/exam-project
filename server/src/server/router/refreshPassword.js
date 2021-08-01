const passwordRouter = require('express').Router();
const AuthController = require('../controllers/authController');


passwordRouter.post('/refreshPassword',  AuthController.refreshPassword);
passwordRouter.post('/updatePassword',  AuthController.updatePassword);

module.exports = passwordRouter;