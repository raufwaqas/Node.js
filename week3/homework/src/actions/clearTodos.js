let getAllTodos = require('./getAllTodos');

let clearTodos = (req, res) => {
  return new Promise((resolve, reject) => {
    let todos = getAllTodos();
    todos = [
      {
        message: 'all todos deleted',
      },
    ];
    resolve(todos);
  });
};

module.exports = clearTodos;
