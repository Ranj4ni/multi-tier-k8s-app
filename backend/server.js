const express = require('express');
const app = express();

const message = process.env.MESSAGE || "Default Message";

app.get('/', (req, res) => {
  res.send(`<h1>${message}</h1>`);
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
