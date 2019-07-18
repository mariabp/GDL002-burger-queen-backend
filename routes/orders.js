/* eslint-disable padded-blocks */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
const express = require('express');

const router = express.Router();

const Order = require('../models/Order');

const Table = require('../models/Table');

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
    order: req.body.order,
    table: req.body.table,
    table_id: req.body.table_id,
    notes: req.body.notes,
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

    .then(order => order.remove())

    .then(() => Order.find())

    .then((updatedOrders) => {

      Order.find({ table_id: req.body.table_id })

        .then((orders) => {

          if (orders.length === 0) {

            Table.findByIdAndUpdate(req.body.table_id, { isPreparing: false })

              .then(table => table.save())

              .then(() => Table.find())

              .then(updatedTables => res.send({ updatedOrders, updatedTables }));

          } else if (orders.every(order => order.status !== 'preparing')) {

            Table.findByIdAndUpdate(req.body.table_id, { isPreparing: false })

              .then(table => table.save())

              .then(() => Table.find())

              .then(updatedTables => res.send({ updatedOrders, updatedTables }));

          } else if (orders.every(order => order.status !== 'ready')) {

            Table.findByIdAndUpdate(req.body.table_id, { isReady: false })

              .then(table => table.save())

              .then(() => Table.find())

              .then(updatedTables => res.send({ updatedOrders, updatedTables }));

          } else {

            res.send({ updatedOrders });

          }

        });

    })

    .catch(error => res.status(500).json({ error }));
});

// UPDATE SINGLE ORDER

router.patch('/update/:id', (req, res) => {

  const data = req.body.data;

  Order.findByIdAndUpdate(req.params.id, data)

    .then(order => order.save())

    .then(() => Order.find())

    .then(orders => res.send(orders))

    .catch(error => res.status(500).send({ error: error }));

});


module.exports = router;
