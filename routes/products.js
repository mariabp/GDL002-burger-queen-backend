const express = require('express');

const router = express.Router();

const Product = require('../models/Product');

// GET ALL PRODUCTS

router.get('/', (req, res) => {
  Product.find()
    .then()
    .then(product => res.json(product));
});

// POST PRODUCT

router.post('/', (req, res) => {
  const newProduct = new Product({

    name: req.body.name,
    price: req.body.price,

  });

  newProduct.save()

    .then(() => Product.find())

    .then(products => res.json(products));
});

// GET SINGLE PRODUCT

router.get('/:id', (req, res) => {
  Product.findById(req.params.id)

    .then(product => res.json(product))

    .catch(error => res.status(500).json({ error }));
});

// REMOVE SINGLE PRODUCT

router.delete('/:id', (req, res) => {
  Product.findById(req.params.id)

    .then()

    .then(product => product.remove())

    .then(() => Product.find())

    .then(products => res.json(products))

    .catch(error => res.status(500).json({ error }));
});

// UPDATE SINGLE PRODUCT

router.put('/:id', (req, res, next) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body)

    .then(() => {
      Product.findOne({ _id: req.params.id }).then((product) => {
        res.send(product);
      });
    })
    .catch(next);
});

module.exports = router;
