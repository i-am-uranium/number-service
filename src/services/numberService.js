const { numberUtility } = require('../utils');

const generateHappyNumber = async (digit) => numberUtility.generateHappyNumber(digit);

const isHappyNumber = async (number) => numberUtility.isHappyNumber(number);

module.exports = {
  generateHappyNumber,
  isHappyNumber,
};
