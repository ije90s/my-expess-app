const { Router } = require("express");

const testRouter2 = Router();

testRouter2.get("/", (req, res) => {
  res.send("testRouter2 Route");
});

testRouter2.get("/value", (req, res) => {
  const { value1, value2 } = req.query;
  res.send(`testRouter2 Route: ${value1}, ${value2}`);
});

module.exports = { testRouter2 }; // 명시적으로 내보내기
