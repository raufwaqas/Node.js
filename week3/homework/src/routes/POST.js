let express = require('express');
let router = express.Router();
let createSingleTodo = require('../actions/createSingleTodo');

// posts 1 todo in the database ✅
router.post('/todos', (req, res) => {
  createSingleTodo(req, res)
    .then((todo) => res.status(200).json(todo))
    .catch((err) => res.status(500).send({ message: 'Please try again', err }));
});

module.exports = router;
