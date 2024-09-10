const serverless = require("serverless-http");
const app = require("./app");

module.exports.handler = async (event, context) => {
  console.log("Received event:", JSON.stringify(event, null, 2)); // 요청 로그
  return serverless(app)(event, context);
};
