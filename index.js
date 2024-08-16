require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("@InkExchanger");
});

app.get("/login", (req, res) => {
  res.send(`<h1>Please Login at Chair aur Code</h1>`);
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai uar Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
