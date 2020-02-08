const { celebrate } = require('celebrate');

const { happyNumber } = require('../common/schemas');
const happyNumberController = require('../controllers/happyNumberController');


module.exports = (app) => {
  app.post('/v1/number/happy-number', celebrate(happyNumber.generateHappyNumber), happyNumberController.generateHappyNumber);
  app.get('/v1/number/happy-number', celebrate(happyNumber.validateHappyNumber), happyNumberController.isHappynumber);
};
