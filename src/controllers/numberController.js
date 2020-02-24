const { CREATED, OK } = require('http-status-codes');

const numberService = require('../services/numberService');

const generateHappyNumber = async (req, res, next) => {
  try {
    const { body } = req;
    const result = await numberService.generateHappyNumber(body.length);
    res.status(CREATED).json(result);
  } catch (error) {
    next(error);
  }
};

const isHappyNumber = async (req, res, next) => {
  try {
    const { number } = req.query;
    const happyNumber = await numberService.isHappyNumber(number);
    res.status(OK).json({ happyNumber });
  } catch (error) {
    next(error);
  }
};

const isHarshadNumber = async (req, res, next) => {
  try {
    const { number } = req.body;
    const harshadNumber = await numberService.isHarshadNumber(number);
    res.status(OK).json({ harshadNumber });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  generateHappyNumber,
  isHappyNumber,
  isHarshadNumber,
};
