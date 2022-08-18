const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '../data.json');

let getSingleTodo = (req) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, success) => {
      if (err) {
        reject(err);
      } else {
        let find = JSON.parse(success).find(
          (item) => item.id === req.params.id
        );

        if (!find) {
          reject('todo not found');
        } else {
          resolve(find);
        }
      }
    });
  });
};

module.exports = getSingleTodo;
