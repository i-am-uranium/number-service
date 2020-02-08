const NumberModel = require('../dao/number');


const save = async (numberData) => {
  const result = await NumberModel.create(numberData);
  return result;
};
const updateReadFreq = async (id, updatedReadFreq) => {
  const result = await NumberModel.updateOne({ _id: id }, { read_frequency: updatedReadFreq });
  return result;
};

const findByNumber = async (number) => {
  const result = await NumberModel.find()
    .where('number')
    .equals(number)
    .lean()
    .exec();
  return result;
};

module.exports = {
  save,
  findByNumber,
  updateReadFreq,
};
