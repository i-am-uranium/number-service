const { Joi } = require('celebrate');

const envVarsSchema = Joi.object({
  MONGO_URI: Joi.string()
    .required(),
  MONGO_POOL_SIZE: Joi.number()
    .required(),
  MONGO_RECONNECT_INTERVAL: Joi.number()
    .required(),
  MONGO_CONNECT_TIMEOUT: Joi.number()
    .required(),
  MONGO_SOCKET_TIMEOUT: Joi.number()
    .required(),
}).unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Common config validation error: ${error.message}`);
}

const config = {
  mongo: {
    uri: envVars.MONGO_URI,
    poolSize: envVars.MONGO_POOL_SIZE,
    reconnectInterval: envVars.MONGO_RECONNECT_INTERVAL,
    connectTimeout: envVars.MONGO_CONNECT_TIMEOUT,
    socketTimeout: envVars.MONGO_SOCKET_TIMEOUT,
  },
};

module.exports = config;
