const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  status: { type: String },
  order: { type: Array },
  table_id: { type: String },
  notes: { type: Array },
  createdAt: { type: Date },
  createdBy: { type: String },
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
