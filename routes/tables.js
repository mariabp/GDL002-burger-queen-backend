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

router.patch('/:id', (req, res, next) => {
  Table.findByIdAndUpdate({ _id: req.params.id }, req.body)

    .then(() => {
      Table.findOne({ _id: req.params.id }).then((table) => {
        res.send(table);
      });
    })

    .catch(next);
});

module.exports = router;
