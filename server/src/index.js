const http = require('http');
require('dotenv').config();
require('./server/dbMongo/mongoose');
const controller = require('./socketInit');
const app = require('./app')();
const cron = require('node-cron');
const { loggerCopy } = require('./server/handlerError/logger');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

controller.createConnection(server);

server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);

cron.schedule('0 1 * * *', () => {
  loggerCopy()
});