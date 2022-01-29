const jwt = require("jsonwebtoken");
const secretKey = "WEFNOInwiwepjrOQJROQPW123";

const sign = (payload) => {
  return jwt.sign(payload, secretKey);
};

const decryptToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { sign, decryptToken };
