const errorHandler = (error, req, res, next) => {
  switch (error.name) {
    case "SequelizeValidationError":
      res.status(404).json({ message: error.errors[0].message });
      break;

    case "SequelizeUniqueConstraintError":
      res.status(404).json({ message: error.errors[0].message });
      break;

    case "productNotFound":
      res.status(404).json({ message: "Product not found" });
      break;

    case "emptyEmail":
      res.status(404).json({ message: "Email required" });
      break;

    case "emptyPassword":
      res.status(404).json({ message: "Password required" });
      break;

    case "emptyCategory":
      res.status(404).json({ message: "Category required" });
      break;

    case "invalidLogin":
      res.status(401).json({ message: "Invalid email or password" });
      break;

    case "categoryNotFound":
      res.status(404).json({ message: "Category not found" });
      break;

    case "notAuthorized":
      res.status(403).json({ message: "You are not authorized" });
      break;

    case "userNotFound":
      res.status(404).json({ message: "User not found" });
      break;

    default:
      res.status(500).json(error.name);
      break;
  }
};

module.exports = errorHandler;
