const express = require("express");
const model = require ('./model');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("cors")());

const server = app.listen(4000, () => {
  console.log("Server listening on port 4000");
});

app.get('/graphics',(req, res) => {
    res.json(model.graphics());
});