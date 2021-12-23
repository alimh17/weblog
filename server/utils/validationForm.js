const Validator = require("fastest-validator");

const v = new Validator();

const loginSchema = {
  email: { type: "email" },
  password: { type: "string", min: 4 },
};

const registerSchema = {
  fullname: { type: "string", min: 4 },
  email: { type: "email" },
  password: { type: "string", min: 4 },
  confirmPassword: { type: "string", min: 4 },
};

const check = v.compile(loginSchema);
const checkRegister = v.compile(registerSchema);

module.exports = { check, checkRegister };
