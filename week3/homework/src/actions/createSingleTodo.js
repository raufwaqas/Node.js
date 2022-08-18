let dayjs = require('dayjs');
const { response } = require('express');
const { v4: uuidv4 } = require('uuid');

const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '../data.json');

let createSingleTodo = (req, res) => {
  return new Promise((resolve, reject) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      reject('Data cannot be blank');
    } else {
      if (req.body.todo !== '') {
        req.body.id = uuidv4();
        req.body.date = dayjs().format();
        req.body.done = false;

        fs.readFile(filePath, { encoding: 'utf-8' }, (error, allTodos) => {
          if (error) {
            reject(error);
          } else {
            let json = JSON.parse(allTodos);
            json.push(req.body);
            fs.writeFile(filePath, JSON.stringify(json), (err) => {
              if (err) {
                reject(err);
              }
            });
            resolve(json);
          }
        });
      } else {
        reject('task cannot be blan');
      }
    }
  });
};

module.exports = createSingleTodo;
