const express = require('express');
const users = require('../db/users');
var cors = require('cors');

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
  const response = users;
  res
    .header('Content-Type', 'application/json')
    .status(200)
    .send(response)
    .end();
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
