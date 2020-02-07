const { Joi } = require('celebrate');

const generate = {
  query: Joi.object({
    digit: Joi.number()
      .default(4)
      .required(),
  }).unknown()
    .required(),
};

module.exports = {
  generate,
};
