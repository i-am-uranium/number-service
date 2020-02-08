const _ = require('lodash');
const logger = require('./logger');
const mongoDBConnection = require('./mongoDBConnection');

module.exports = _.assignIn({}, logger, { mongoDBConnection });
