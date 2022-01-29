const { Product, Image, Category, sequelize } = require("../models");

class ControllerProduct {
  static async products(req, res, next) {
    try {
      const products = await Product.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
          {
            model: Image,
            attributes: ["imgUrl", "id"],
          },
        ],
      });
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async product(req, res, next) {
    try {
      const id = +req.params.id;
      const product = await Product.findByPk(id, {
        include: [
          {
            model: Image,
            attributes: ["imgUrl", "id"],
          },
          {
            model: Category,
            attributes: ["name"],
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      if (!product) throw { name: "productNotFound" };
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id);
      if (!product) throw { name: "productNotFound" };

      await product.destroy();

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async postProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      // const UserId = +req.user.id;
      const {
        name,
        categoryId,
        description,
        price,
        mainImg,
        image1,
        image2,
        image3,
        userMongoId,
      } = req.body;

      const slug = name.split(" ").join("-");

      const data = {
        name,
        categoryId,
        description,
        price,
        mainImg,
        authorId: 1,
        slug,
        userMongoId,
      };
      const product = await Product.create(data);

      const productId = product.id;

      if (image1 || image2 || image3) {
        const values = [];
        if (image1) values.push({ imgUrl: image1, productId });
        if (image2) values.push({ imgUrl: image2, productId });
        if (image3) values.push({ imgUrl: image3, productId });
        const addImages = await Image.bulkCreate(values);
      }

      await t.commit();

      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      await t.rollback();
      next(error);
    }
  }

  static async images(req, res, next) {
    try {
      const { id } = req.params;
      const images = await Image.findAll({ where: { productId: id } });
      res.status(200).json(images);
    } catch (error) {
      next(error);
    }
  }

  static async putProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, categoryId, description, price, mainImg } = req.body;

      const slug = name.split(" ").join("-");
      const data = {
        name,
        categoryId,
        description,
        price,
        mainImg,
        slug,
      };

      const product = await Product.update(data, {
        where: { id },
        returning: true,
      });
      res.status(200).json(product[1][0]);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerProduct;
