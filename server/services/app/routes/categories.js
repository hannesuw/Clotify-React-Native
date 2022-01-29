const router = require("express").Router();
const ControllerCategory = require("../controllers/controllerCategory");

router.get("/", ControllerCategory.categories);
router.get("/:id", ControllerCategory.category);
router.post("/", ControllerCategory.postCategory);
router.delete("/:id", ControllerCategory.delete);

module.exports = router;
