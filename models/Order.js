const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  status: { type: String },
  orderedItems: { type: Array },
  table: { type: Number },
  createdAt: { type: String },
  createdBy: { type: String },
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
