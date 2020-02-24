const { celebrate } = require('celebrate');

const { number } = require('../common/schemas');
const numberController = require('../controllers/numberController');


module.exports = (app) => {
  app.post('/v1/numbers/happy-number', celebrate(number.generateHappyNumber), numberController.generateHappyNumber);
  app.get('/v1/numbers/happy-number', celebrate(number.validateHappyNumber), numberController.isHappyNumber);

  app.get('/v1/numbers/harshad-number', celebrate(number.validateHarshadNumber), numberController.isHarshadNumber);
};
