const router = require('express').Router();
const { checkAccessToken } = require('../middlewares/tokenMw');
const authRouter = require('./auth');
const chatRouter = require('./chat');
const userRouter = require('./user');
const contestRouter = require('./contest');

router.use('/auth', authRouter);

router.use(checkAccessToken);

router.use('/', chatRouter, contestRouter, userRouter);

module.exports = router;
