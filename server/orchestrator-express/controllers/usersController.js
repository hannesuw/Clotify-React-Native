const { usersApi } = require("../apis/local");
const Redis = require("ioredis");
const redis = new Redis();

class UsersController {
  static async users(req, res, next) {
    try {
      const usersCache = await redis.get("users");
      if (usersCache) {
        const users = JSON.parse(usersCache);

        res.status(200).json(users);
      } else {
        const { data: users } = await usersApi.get("/users");
        await redis.set("users", JSON.stringify(users));

        res.status(200).json(users);
      }
    } catch (err) {
      next(err);
    }
  }

  static async user(req, res, next) {
    try {
      const { _id } = req.params;
      const { data: user } = await usersApi.get(`/users/${_id}`);

      res.status(200).json(user);
    } catch (error) {
      if (error.response.data.message === "User not found") {
        res.status(404).json({ message: error.response.data.message });
      } else {
        next(error);
      }
    }
  }

  static async delete(req, res, next) {
    try {
      const { _id } = req.params;
      await usersApi.get(`/users/${_id}`);

      const { data: deleteUser } = await usersApi.delete(`/users/${_id}`);
      await redis.del("users");

      res.status(200).json(deleteUser);
    } catch (err) {
      if (error.response.data.message === "User not found") {
        res.status(404).json({ message: error.response.data.message });
      } else {
        next(error);
      }
    }
  }

  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const data = { username, email, password, phoneNumber, address };

      await usersApi.post(`/users/register`, data);
      await redis.del("users");

      const message = `Success create user`;

      res.status(201).json({ message });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UsersController;
