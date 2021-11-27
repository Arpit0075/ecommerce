const router = require("express").Router();
const PurchasesModule = require("../Module/purchasesModule");

router.get("/", PurchasesModule.getPurchases);
router.post("/", PurchasesModule.postPurchases);

module.exports = router;
