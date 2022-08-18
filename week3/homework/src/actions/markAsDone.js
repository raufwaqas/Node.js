const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '../data.json');

const markAsDone = (req) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, success) => {
      if (err) {
        reject(err);
      } else {
        let allTodos = JSON.parse(success);
        let find = allTodos.find((item) => item.id === req.params.id);

        if (!find) {
          reject('todo not found');
        } else {
          find.done = true;

          fs.writeFile(filePath, JSON.stringify(allTodos), (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(find);
            }
          });
        }
      }
    });
  });
};

module.exports = markAsDone;
