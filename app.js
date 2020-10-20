const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.get("/page-one", (req, res) => {
  res.send("This is page one");
});

app.get("/page-two", (req, res) => {
  res.send("this is page two");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
