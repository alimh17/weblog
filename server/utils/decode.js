const jwt = require("jsonwebtoken");

exports.decoded = (token) => {
  const decode = jwt.decode(token);
  return decode;
};
