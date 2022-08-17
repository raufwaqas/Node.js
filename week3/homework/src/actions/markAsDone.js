let getSingleTodo = require('./getSingleTodo');

const markAsDone = (req) => {
  return new Promise((resolve, reject) => {
    let todo = getSingleTodo(req);
    let updatedTodo = {
      ...todo,
    };
    todo.done = true;
    resolve(todo);
  });
};

module.exports = markAsDone;
