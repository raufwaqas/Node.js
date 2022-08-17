const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '../data.json');

let getAllTodos = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, success) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(success));
      }
    });
  });
};

module.exports = getAllTodos;
