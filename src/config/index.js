const _ = require('lodash');
const server = require('./server');
const logger = require('./logger');
const mongo = require('./mongo');

module.exports = _.assignIn({}, server, logger, mongo);
