const router = require("express").Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.findAll);
router.get("/:id", UserController.findById);
router.post("/register", UserController.register);
router.delete("/:id", UserController.delete);

module.exports = router;
