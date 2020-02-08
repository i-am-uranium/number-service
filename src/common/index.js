const _ = require('lodash');
const logger = require('./logger');
const db = require('./db');

module.exports = _.assignIn({}, logger, { db });
