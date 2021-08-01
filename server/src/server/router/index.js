const router = require('express').Router();
const { checkAccessToken, checkModerationToken } = require('../middlewares/tokenMw');
const authRouter = require('./auth');
const chatRouter = require('./chat');
const userRouter = require('./user');
const contestRouter = require('./contest');
const refreshPasswordRouter = require('./refreshPassword');
const moderationRouter = require('./moderation');

router.use(refreshPasswordRouter);
router.use('/auth', authRouter);
router.use(checkAccessToken);

router.use('/', chatRouter, contestRouter, userRouter);

router.use(checkModerationToken)
router.use(moderationRouter);





module.exports = router;
