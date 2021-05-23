const contestRouter = require('express').Router();
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const upload = require('../utils/fileUpload');
const contestController = require('../controllers/contestController');

contestRouter.post('/dataForContest', contestController.dataForContest);

contestRouter.post(
  '/getCustomersContests',
  contestController.getCustomersContests
);

contestRouter.post(
  '/getAllContests',
  basicMiddlewares.onlyForCreative,
  contestController.getContests
);

contestRouter.post(
  '/updateContest',
  upload.updateContestFile,
  contestController.updateContest
);

contestRouter.post(
  '/setNewOffer',
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer
);

contestRouter.post(
  '/setOfferStatus',
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus
);

contestRouter.get('/downloadFile/:fileName', contestController.downloadFile);

contestRouter.get(
  '/getContestById',
  basicMiddlewares.canGetContest,
  contestController.getContestById
);

module.exports = contestRouter;
