const express = require("express");
const { testRouter1, testRouter2 } = require("./routes");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express running on Lambda!");
});

app.use("/test1", testRouter1);
app.use("/test2", testRouter2);

module.exports = app;
