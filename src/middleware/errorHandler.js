const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

const { logger, logLevel } = require('../common/logger');

const errorHandler = (error, req, res, next) => {
  if (error) {
    logger.log(logLevel.ERROR, `An Error has occurred in req: ${req}. Detailed error is: ${error.message}`);
    if (error.statusCode) {
      const { message, details, statusCode } = error;
      res.status(statusCode).json({ message, details });
    } else {
      res.sendStatus(INTERNAL_SERVER_ERROR);
    }
  }
  next();
};

module.exports = errorHandler;
