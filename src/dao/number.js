const _ = require('lodash');
const mongoose = require('mongoose');

const { Schema } = mongoose;
const { numberType } = require('../common/constant');


const NumberSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: _.values(numberType),
    required: true,
  },
  read_frequency: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
}, { collection: 'number', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const NumberModel = mongoose.model('Number', NumberSchema);

module.exports = NumberModel;
