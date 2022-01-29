const bcrypt = require("bcryptjs");

const hash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const verifyPassword = (password, hashedPassowrd) => {
  return bcrypt.compareSync(password, hashedPassowrd);
};

module.exports = {
  hash,
  verifyPassword,
};
