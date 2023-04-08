const router = require("express").Router();
const serviceController = require("../controllers/serviceController");

router.post("/services", serviceController.createService);
router.get("/services", serviceController.getAllServices);
router.get("/services/:id", serviceController.getService);

module.exports = router;
