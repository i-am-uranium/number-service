const { Joi } = require('celebrate');

const envVarsSchema = Joi.object({
  PORT: Joi.number()
    .required(),
  NODE_ENV: Joi.string()
    .required(),
}).unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Common config validation error: ${error.message}`);
}

const config = {
  server: {
    port: envVars.PORT,
    env: envVars.NODE_ENV,
  },
};

module.exports = config;
