const pino = require('pino');

const config = require('../config');

const pinoLogger = pino({
  level: config.logger.level,
});

const logLevel = {
  TRACE: 'trace',
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
  FATAL: 'fatal',
};

const logger = {
  log(level, message) {
    if (!level || !message || typeof message !== 'string') {
      throw new Error('Level and message is mandatory in logger');
    }
    pinoLogger[level](message);
  },
};

module.exports = {
  logger,
  logLevel,
};
