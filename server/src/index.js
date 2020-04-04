const express = require('express');
const users = require('../db/users');
const orders = require('../db/orders');
var cors = require('cors');

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
  setTimeout(() => {
    const response = users;
    res
      .header('Content-Type', 'application/json')
      .status(200)
      .send(response)
      .end();
  }, 1500);
});

app.get('/orders', (req, res) => {
  setTimeout(() => {
    let userId = req.query.userId;

    let response = null;
    if (userId) {
      response = orders.filter((order) => order.userId.toString() === userId);
    } else {
      response = orders;
    }

    res
      .header('Content-Type', 'application/json')
      .status(200)
      .send(response)
      .end();
  }, 1000);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
