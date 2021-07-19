const router = require('express').Router();
const { checkAccessToken } = require('../middlewares/tokenMw');
const authRouter = require('./auth');
const chatRouter = require('./chat');
const userRouter = require('./user');
const contestRouter = require('./contest');
const refreshPasswordRouter = require('./refreshPassword');
const moderationRouter = require('./moderation');

router.use('/auth', authRouter);
router.use(refreshPasswordRouter);
router.use(checkAccessToken);

router.use('/', chatRouter, contestRouter, userRouter, moderationRouter);

module.exports = router;
