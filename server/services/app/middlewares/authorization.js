const { User } = require("../models");
const { decryptToken } = require("../helpers/jwt");

const authorization = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: "notAuthorized" };

    const payload = decryptToken(access_token);

    const user = User.findByPk(payload.id);
    if (!user) throw { name: "userNotFound" };

    req.user = {
      id: payload.id,
    };
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { authorization };
