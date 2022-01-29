const router = require("express").Router();
const users = require("./users");
const errorHandler = require("../middlewares/errorHandler");

router.get("/", (req, res) => res.status(200).json({ message: "API Running" }));
router.use("/users", users);

router.use(errorHandler);

module.exports = router;
