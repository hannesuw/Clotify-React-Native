const router = require("express").Router();
const users = require("./users");
const products = require("./products");
const categories = require("./categories");
const errorHandler = require("../middlewares/errorHandler");

router.get("/", (req, res) => res.send({ message: "API Running" }));
router.use("/categories", categories);
router.use("/products", products);
router.use("/users", users);

router.use(errorHandler);
module.exports = router;
