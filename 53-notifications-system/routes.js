const express = require("express");
const router = express.Router();
const { sendNotification } = require("./notificationService");

router.post("/notify", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message required" });
  }

  sendNotification(message);
  res.json({ success: true });
});

module.exports = router;