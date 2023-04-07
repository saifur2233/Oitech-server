const router = require("express").Router();
const messageController = require("../controllers/messageController");

router.post("/messages", messageController.SendMessage);
router.get("/messages", messageController.getAllSendMsg);

module.exports = router;
