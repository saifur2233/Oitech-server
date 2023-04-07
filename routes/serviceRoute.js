const router = require("express").Router();
const serviceController = require("../controllers/serviceController");

router.post("/services", serviceController.createService);
router.get("/services", serviceController.getAllServices);

module.exports = router;
