const { CREATED, OK } = require('http-status-codes');

const numberService = require('../services/numberService');

const generateHappyNumber = async (req, res, next) => {
  try {
    const { body } = req;
    const number = await numberService.generateHappyNumber(body.length);
    res.status(CREATED).json({ number });
  } catch (error) {
    next(error);
  }
};

const isHappynumber = async (req, res, next) => {
  try {
    const { number } = req.query;
    const happyNumber = await numberService.isHappyNumber(number);
    res.status(OK).json({ happyNumber });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateHappyNumber,
  isHappynumber,
};
