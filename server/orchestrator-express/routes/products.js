const router = require("express").Router();
const ProductsController = require("../controllers/productsController");

router.get("/", ProductsController.products);
router.get("/:id", ProductsController.product);
router.post("/", ProductsController.createProduct);
router.delete("/:id", ProductsController.delete);
router.put("/:id", ProductsController.updateProduct);

module.exports = router;
