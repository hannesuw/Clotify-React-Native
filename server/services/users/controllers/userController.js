const User = require("../models/User");

class userController {
  static async findAll(req, res, next) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  static async findById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) throw { name: "userNotFound" };

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const role = "customer";
      const userData = {
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      };

      const user = await User.create(userData);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) throw { name: "userNotFound" };

      await User.deleteById(id);

      const message = `${user.username} has been deleted`;
      res.status(200).json({ message });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userController;
