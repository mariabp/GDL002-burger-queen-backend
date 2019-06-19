const express = require('express');

const router = express.Router();

const Order = require('../models/Order');

// GET ALL ORDERS

router.get('/', (req, res) => {
  Order.find()
    .then()
    .then(orders => res.json(orders));
});

// POST ORDER

router.post('/', (req, res) => {
  const newOrder = new Order({

    status: req.body.status,
    items: req.body.items,
    createdAt: req.body.createdAt,
    createdBy: req.body.createdBy,

  });

  newOrder.save()

    .then(() => Order.find())

    .then(orders => res.json(orders));
});

// GET SINGLE ORDER

router.get('/:id', (req, res) => {
  Order.findById(req.params.id)

    .then(order => res.json(order))

    .catch(error => res.status(500).json({ error }));
});

// REMOVE SINGLE ORDER

router.delete('/:id', (req, res) => {
  Order.findById(req.params.id)

    .then()

    .then(order => order.remove())

    .then(() => Order.find())

    .then(orders => res.json(orders))

    .catch(error => res.status(500).json({ error }));
});

// UPDATE SINGLE ORDER

router.put('/:id', (req, res, next) => {
  Order.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Order.findOne({ _id: req.params.id }).then((order) => {
        res.send(order);
      });
    })
    .catch(next);
});


module.exports = router;
