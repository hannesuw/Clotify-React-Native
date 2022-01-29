const router = require("express").Router();
const ControllerUser = require("../controllers/controllerUser");

router.post("/login", ControllerUser.login);
router.post("/register", ControllerUser.register);

module.exports = router;
