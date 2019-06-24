const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const TableSchema = new Schema({
  number: { type: Number },
  pendingOrder: { type: Array },
  waiter: { type: String },
});

const Table = mongoose.model('table', TableSchema);
module.exports = Table;
