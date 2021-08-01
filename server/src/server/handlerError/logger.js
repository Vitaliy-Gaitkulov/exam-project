const fs = require('fs').promises;

module.exports.logger = async err => {
  let errArray = { errors: [] };
  const error = {
    message: err.message,
    time: Date.now(),
    code: err.code,
    stackTrace: err.stack,
  };
  fs.readFile('./log.json', 'utf8')
    .then(content => {
      if (content !== '') {
        errArray = JSON.parse(content);
        errArray.errors.push(error);
        return fs.writeFile('./log.json', `${JSON.stringify(errArray)}`);
      }
      errArray.errors.push(error);
      fs.writeFile('./log.json', `${JSON.stringify(errArray)}`);
    })
};

module.exports.loggerCopy = async () => {
  fs.readFile('./log.json', 'utf8').then(content => {
    if (content !== '') {
      const lastErrors = JSON.parse(content);
      const cleanStackTrace = lastErrors.errors.map(err => {
        delete err.stackTrace;
        return err;
      });
      fs.writeFile(
        `./log-${Date.now()}.json`,
        `${JSON.stringify(cleanStackTrace)}`
      );
      return fs
        .truncate('./log.json', 0)
        .then(() => {
          console.log('\nCopy logs done!\n');
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
};
