"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
      Product.hasMany(models.Image, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name field must not be empty",
          },
          notEmpty: {
            msg: "Name field must not be empty",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Slug field must not be empty",
          },
          notEmpty: {
            msg: "Slug field must not be empty",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Description field must not be empty",
          },
          notEmpty: {
            msg: "Description field must not be empty",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Price field must not be empty",
          },
          notEmpty: {
            msg: "Price field must not be empty",
          },
          min: {
            args: [0],
            msg: "Minimun price is 0",
          },
        },
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Main Image field must not be empty",
          },
          notEmpty: {
            msg: "Main Image field must not be empty",
          },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Category Id field must not be empty",
          },
          notEmpty: {
            msg: "Category Id field must not be empty",
          },
        },
      },
      userMongoId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "User MongoId field must not be empty",
          },
          notEmpty: {
            msg: "User MongoId field must not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
