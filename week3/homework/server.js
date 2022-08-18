let express = require('express');
let app = express();
let GET = require('./src/routes/GET');
let POST = require('./src/routes/POST');
let PUT = require('./src/routes/PUT');
let DELETE = require('./src/routes/DELETE');
app.use(express.json());

app.use('/todos', GET);
app.use('/', POST);
app.use('/', DELETE);
app.use('/', PUT);

// server
app.listen(8080, () => {
  console.log('server is running on port 8080');
});
