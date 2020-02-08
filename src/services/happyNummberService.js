const _ = require('lodash');
const { numberUtility } = require('../utils');
const numberRepository = require('../repositories/happyNumberRepository');
const { getDBStorableHappyNumber } = require('../transformers/happyNumberTransformer');

const generateHappyNumber = async (length) => {
  const number = numberUtility.generateHappyNumber(length);
  const existigNumbers = await numberRepository.findByNumber(number);
  if (!_.isEmpty(existigNumbers)) {
    const numberDetails = existigNumbers[0];
    await numberRepository.updateReadFreq(numberDetails._id, numberDetails.read_frequency + 1);
    return { id: numberDetails._id, number };
  }
  const result = await numberRepository.save(getDBStorableHappyNumber({
    number,
    readFrequency: 1,
    length,
  }));
  return { id: result._id, number };
};

const isHappyNumber = async (number) => {
  const result = await numberRepository.findByNumber(number);
  if (!_.isEmpty(result)) {
    const numberDetails = result[0];
    await numberRepository.updateReadFreq(numberDetails._id, numberDetails.read_frequency + 1);
    return true;
  }
  if (numberUtility.isHappyNumber(number)) {
    await numberRepository.save(getDBStorableHappyNumber({
      number,
      readFrequency: 1,
      length: number.length,
    }));
    return true;
  }
  return false;
};

module.exports = {
  generateHappyNumber,
  isHappyNumber,
};
