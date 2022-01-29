const { Category } = require("../models");

class ControllerCategory {
  static async categories(req, res, next) {
    try {
      const categories = await Category.findAll({ attributes: ["id", "name"] });
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  static async category(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async postCategory(req, res, next) {
    try {
      const { category } = req.body;
      if (!category) throw { name: "emptyCategory" };
      const newCategory = await Category.create({ name: category });
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (!category) throw { name: "categoryNotFound" };

      await category.destroy();
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerCategory;
