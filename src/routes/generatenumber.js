const { celebrate } = require('celebrate');

const { generateNumber } = require('../common/schemas');
const generatenumberController = require('../controllers/generatenumberController');


module.exports = (app) => {
  app.post('/v1/happy-number', celebrate(generateNumber.generate), generatenumberController.generateNumber);
};
