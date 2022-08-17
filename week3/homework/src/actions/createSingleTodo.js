let dayjs = require('dayjs');
const { response } = require('express');
const { v4: uuidv4 } = require('uuid');

let createSingleTodo = (req, res) => {
  return new Promise((resolve, reject) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      reject('Data cannot be blank');
    } else {
      if (req.body.todo !== '') {
        req.body.id = uuidv4();
        req.body.date = dayjs().format();
        req.body.done = false;

        resolve(req.body);
      } else {
        reject('task cannot be blan');
      }
    }
  });
};

module.exports = createSingleTodo;
