const { numberType } = require('../common/constant');

const getDBStorableHappyNumber = ({ number, readFrequency, length } = {}) => ({
  number,
  type: numberType.HAPPY_NUMBER,
  read_frequency: readFrequency,
  length,
});

module.exports = {
  getDBStorableHappyNumber,
};
