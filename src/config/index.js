const _ = require('lodash');
const server = require('./server');
const logger = require('./logger');

module.exports = _.assignIn({}, server, logger);
