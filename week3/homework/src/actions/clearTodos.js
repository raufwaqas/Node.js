let getAllTodos = require('./getAllTodos');
const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '../data.json');

let clearTodos = (req, res) => {
  return new Promise((resolve, reject) => {
    let json = [];
    fs.writeFile(filePath, JSON.stringify(json), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(json);
      }
    });
  });
};

module.exports = clearTodos;
