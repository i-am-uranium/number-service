const { Joi } = require('celebrate');

const generateHappyNumber = {
  body: Joi.object({
    length: Joi.number()
      .min(1)
      .max(100)
      .integer()
      .required(),
  }).unknown()
    .required(),
};

const validateHappyNumber = {
  body: Joi.object({
    number: Joi.string()
      .regex(/^\d+$/)
      .max(100)
      .required(),
  })
    .unknown()
    .required(),
};

const validateHarshadNumber = {
  body: Joi.object({
    number: Joi.string()
      .regex(/^\d+$/)
      .max(50)
      .required(),
  })
    .unknown()
    .required(),
};

module.exports = {
  generateHappyNumber,
  validateHappyNumber,
  validateHarshadNumber,
};
