const bcrypt = require("bcryptjs");

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(8);
  return bcrypt.hashSync(password, salt);
};

module.exports = { encryptPassword };
