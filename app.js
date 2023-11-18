// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is your microservice!');
});

app.listen(port, () => {
  console.log(`Microservice is listening on port ${port}`);
});
