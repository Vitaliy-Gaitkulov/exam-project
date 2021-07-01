const passwordRouter = require('express').Router();
const AuthController = require('../controllers/authController');


passwordRouter.post('/refreshPassword',  AuthController.refreshPassword);
passwordRouter.post('/refreshPassword/:hash',  AuthController.refreshPasswordHash);

module.exports = passwordRouter;