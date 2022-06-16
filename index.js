require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello World')
});


app.post('/', function (req, res) {
    res.send('Send POST')
  });

app.listen(port, ()=> {
    console.log(`Server started at Port ${port}`);
});