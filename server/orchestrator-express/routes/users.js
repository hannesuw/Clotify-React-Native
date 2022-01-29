const router = require("express").Router();
const UsersController = require("../controllers/usersController");

router.get("/", UsersController.users);
router.get("/:_id", UsersController.user);
router.delete("/:_id", UsersController.delete);
router.post("/", UsersController.register);

module.exports = router;
