const { appApi, usersApi } = require("../apis/local");
const Redis = require("ioredis");
const redis = new Redis();

class ProductsController {
  static async products(req, res, next) {
    try {
      const productsCache = await redis.get("products");
      if (productsCache) {
        const products = JSON.parse(productsCache);

        res.status(200).json(products);
      } else {
        const { data: products } = await appApi.get(`/products`);
        await redis.set("products", JSON.stringify(products));

        res.status(200).json(products);
      }
    } catch (err) {
      next(err);
    }
  }

  static async product(req, res, next) {
    try {
      const { id } = req.params;
      const { data: product } = await appApi.get(`/products/${id}`);

      const { data: user } = await usersApi.get(
        `/users/${product.userMongoId}`
      );

      res.status(200).json({ ...product, user });
    } catch (err) {
      if (err.response.data.message === "Product not found") {
        res.status(404).json(err.response.data);
      } else {
        next(err);
      }
    }
  }

  static async createProduct(req, res, next) {
    try {
      const { name, categoryId, description, price, mainImg } = req.body;

      const userMongoId = "61dff86d000a89369d6fc3dd";
      const slug = name.split(" ").join("-");

      const data = {
        name,
        categoryId,
        description,
        price,
        mainImg,
        authorId: 1,
        userMongoId,
        slug,
      };

      const { data: createProduct } = await appApi.post(`/products`, data);

      await redis.del("products");

      res.status(201).json(createProduct);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      await appApi.delete(`/products/${id}`);
      await redis.del("products");

      const message = `Success delete product`;
      res.status(200).json({ message });
    } catch (err) {
      if (err.response.data.message === "Product not found") {
        res.status(404).json(err.response.data);
      } else {
        next(err);
      }
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { data: product } = await appApi.get(`/products/${id}`);

      let { name, categoryId, description, price, mainImg } = product;

      let {
        name: editName,
        categoryId: editCategory,
        description: editDescription,
        price: editPrice,
        mainImg: editImage,
      } = req.body;

      if (editName) name = editName;
      if (editCategory) categoryId = editCategory;
      if (editDescription) description = editDescription;
      if (editPrice) price = editPrice;
      if (editImage) image = editImage;

      const data = { name, categoryId, description, price, mainImg };

      const { data: result } = await appApi.put(`/products/${id}`, data);
      await redis.del("products");

      res.status(200).json(result);
    } catch (err) {
      if (err.response.data.message === "Product not found") {
        res.status(404).json(err.response.data);
      } else {
        next(err);
      }
    }
  }
}

module.exports = ProductsController;
