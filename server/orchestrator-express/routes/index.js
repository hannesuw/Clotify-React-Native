const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandler");
const products = require("./products");
const users = require("./users");

router.get("/", (req, res) => res.status(200).json({ message: "API Running" }));
router.use("/products", products);
router.use("/users", users);

router.use(errorHandler);

module.exports = router;
