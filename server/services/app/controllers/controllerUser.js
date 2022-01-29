const { User } = require("../models");
const { verifyPassword, hash } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");

class ControllerUser {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "emptyEmail" };
      if (!password) throw { name: "emptyPassword" };

      const user = await User.findOne({
        where: { email },
      });

      if (!user) throw { name: "invalidLogin" };

      const validPassword = verifyPassword(password, user.password);
      if (!validPassword) throw { name: "invalidLogin" };

      const payload = {
        id: user.id,
        email: user.email,
      };

      const access_token = sign(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, password, phoneNumber, address } = req.body;
      const hashPassword = hash(password);
      const data = { email, password: hashPassword, phoneNumber, address };
      const user = await User.create(data);

      const payload = {
        id: user.id,
        email: user.email,
      };
      res.status(201).json(payload);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerUser;
