"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email field must not be empty",
          },
          notEmpty: {
            msg: "Email field must not be empty",
          },
          isEmail: {
            msg: "Please insert valid email format",
          },
        },
        unique: {
          msg: "Email has already been taken",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password field must not be empty",
          },
          notEmpty: {
            msg: "Password field must not be empty",
          },
          len: {
            args: [5, Infinity],
            msg: "Password should be longer than 5 characters",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Role field must not be empty",
          },
          notEmpty: {
            msg: "Role field must not be empty",
          },
        },
        defaultValue: "admin",
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Phone Number field must not be empty",
          },
          notEmpty: {
            msg: "Phone Number field must not be empty",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Address field must not be empty",
          },
          notEmpty: {
            msg: "Address field must not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
