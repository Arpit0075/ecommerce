const router = require("express").Router();
const ProductsModule = require("../Module/productsModule");

router.post("/saveproduct", ProductsModule.postProduct);
router.get("/", ProductsModule.getProducts);
router.put("/updateproduct/:id", ProductsModule.updateProductQuantity);

module.exports = router;
