const { CREATED, OK } = require('http-status-codes');

const happyNummberService = require('../services/happyNummberService');

const generateHappyNumber = async (req, res, next) => {
  try {
    const { body } = req;
    const result = await happyNummberService.generateHappyNumber(body.length);
    res.status(CREATED).json(result);
  } catch (error) {
    next(error);
  }
};

const isHappynumber = async (req, res, next) => {
  try {
    const { number } = req.query;
    const happyNumber = await happyNummberService.isHappyNumber(number);
    res.status(OK).json({ happyNumber });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateHappyNumber,
  isHappynumber,
};
