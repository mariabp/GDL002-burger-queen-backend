/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
const express = require('express');

const router = express.Router();

const Table = require('../models/Table');

// POST TABLE

router.post('/', (req, res) => {
  const newTable = new Table({

    number: req.body.number,
    pendingOrder: req.body.pendingOrder,
    waiter: req.body.waiter,

  });

  newTable.save()

    .then(() => Table.find())

    .then(tables => res.json(tables));
});

// GET ALL TABLES

router.get('/', (req, res) => {
  Table.find()
    .then()
    .then(tables => res.json(tables));
});

// UPDATE TABLE

router.patch('/update/:id', (req, res) => {
  const data = req.body.data;

  Table.findByIdAndUpdate(req.params.id, data)

    .then(table => table.save())

    .then(() => Table.find())

    .then(tables => res.send(tables))

    .catch(error => res.status(500).send({ error: error }));
});

module.exports = router;
