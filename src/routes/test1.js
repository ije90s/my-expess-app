const { Router } = require("express");

const testRouter1 = Router();

testRouter1.get("/", (req, res) => {
  res.send("testRouter1 Route");
});

testRouter1.get("/check", (req, res) => {
  const { value1, value2 } = req.query;
  res.send(`testRouter1 Route: ${value1}, ${value2}`);
});

module.exports = { testRouter1 }; // 명시적으로 내보내기
