const router = require("express").Router();
const OrderModule = require("../Module/orderModule");

router.get("/:totalAmount", OrderModule.getOrder);

module.exports = router;
