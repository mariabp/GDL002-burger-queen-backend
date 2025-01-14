const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  type: { type: String },
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
