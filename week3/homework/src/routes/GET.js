let express = require('express');

let router = express.Router();
let getAllTodos = require('../actions/getAllTodos');
let getSingleTodo = require('../actions/getSingleTodo');

// gets all the todos from the database ✅

router.get('/', (req, res) => {
  getAllTodos()
    .then((todos) => res.status(200).json([todos]))
    .catch((err) =>
      res.status(500).send({ message: 'cannot read/find file', err })
    );
});

// gets a single todo from the database ✅

router.get('/:id', (req, res) => {
  getSingleTodo(req)
    .then((todos) => res.status(200).json(todos))
    .catch((err) => res.status(500).send({ message: 'Todo not found', err }));
});

module.exports = router;
