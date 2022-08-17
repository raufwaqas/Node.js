'use strict';

let express = require('express');
let router = express.Router();
let clearTodos = require('../actions/clearTodos');

// deletes all todos from the database ✅
router.delete('/todos', (req, res) => {
  clearTodos(req, res)
    .then((todos) => res.status(200).json(todos))
    .catch((err) => res.status(500).send({ message: 'cannot read file', err }));
});

module.exports = router;
