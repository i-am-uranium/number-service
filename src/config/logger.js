const { Joi } = require('celebrate');

const envVarsSchema = Joi.object({
  LOG_LEVEL: Joi.string()
    .valid('trace', 'debug', 'info', 'warn', 'error', 'fatal')
    .required(),
}).unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Common config validation error: ${error.message}`);
}

const config = {
  logger: {
    level: envVars.LOG_LEVEL,
  },
};

module.exports = config;
