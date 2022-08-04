'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    let responseInfo = (status, data) => {
      response.statusCode = status;
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify(data));
    };
    // TODO: Write your homework code here
    if (request.url === '/state') {
      responseInfo(200, { state });
    } else if (request.url === '/add') {
      state += 1;
      responseInfo(200, { state });
    } else if (request.url === '/reset') {
      state = 10;
      responseInfo(200, { state });
    } else if (request.url === '/subtract') {
      state -= 1;
      responseInfo(200, { state });
    } else {
      const error = 'Not found';
      responseInfo(404, { error });
    }
  });

  return server;
}

module.exports = {
  createServer
};
