const mongoose = require('mongoose');

const { mongo } = require('../config');
const { logger, logLevel } = require('./logger');

const connect = async () => {
  const options = {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: mongo.reconnectInterval,
    poolSize: mongo.poolSize,
    connectTimeoutMS: mongo.connectTimeout,
    socketTimeoutMS: mongo.socketTimeout,
  };
  const connection = await mongoose.connect(mongo.uri, options);
  return connection;
};

mongoose.connection.on('connected', () => {
  logger.log(logLevel.INFO, 'Connection to MongoDB server is open');
});

mongoose.connection.on('disconnected', () => {
  logger.log(logLevel.INFO, 'Connection to MongoDB server is disconnected');
});

mongoose.connection.on('reconnected', () => {
  logger.log(logLevel.INFO, 'Connection to MongoDB server is reconnected');
});

mongoose.connection.on('error', (error) => {
  logger.log(logLevel.ERROR, `Error occurred on MongoDB Connection. ${error}`);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    logger.log(logLevel.INFO, 'Closing MongoDB connection due to application termination');
    process.exit(0);
  });
});

module.exports = {
  connect,
};
