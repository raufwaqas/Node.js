let express = require('express');

let router = express.Router();
let markAsDone = require('../actions/markAsDone');

router.put('/todos/:id', (req, res) => {
  markAsDone(req)
    .then((todos) => res.status(201).json(todos))
    .catch((err) => res.status(500).send({ message: 'Item not found', err }));
});

module.exports = router;
