const { CREATED } = require('http-status-codes');

const generateNumberService = require('../services/generateNumberService');

const generateNumber = async (req, res, next) => {
  try {
    const { digit } = req.query;
    const number = await generateNumberService.generateNumber(digit);
    res.status(CREATED).json(number);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateNumber,
};
