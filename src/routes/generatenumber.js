const { celebrate } = require('celebrate');

const { happyNumber } = require('../common/schemas');
const generateHappyNumberController = require('../controllers/generateHappyNumberController');


module.exports = (app) => {
  app.post('/v1/number/happy-number', celebrate(happyNumber.generateHappyNumber), generateHappyNumberController.generateHappyNumber);
  app.get('/v1/number/happy-number', celebrate(happyNumber.validateHappyNumber), generateHappyNumberController.isHappynumber);
};
