const router = require("express").Router();
const ControllerProduct = require("../controllers/controllerProduct");
const { authorization } = require("../middlewares/authorization");

router.get("/", ControllerProduct.products);
router.get("/:id", ControllerProduct.product);
router.get("/images/:id", ControllerProduct.images);

// router.use(authorization);

router.delete("/:id", ControllerProduct.delete);
router.post("/", ControllerProduct.postProduct);
router.put("/:id", ControllerProduct.putProduct);

module.exports = router;
