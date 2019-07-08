const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const TableSchema = new Schema({
  pendingOrder: { type: Array },
  pendingNotes: { type: Array },
  number: { type: String },
  isPreparing: { type: Boolean },
  isReady: { type: Boolean },
  waiter: { type: String },
});

const Table = mongoose.model('table', TableSchema);
module.exports = Table;
