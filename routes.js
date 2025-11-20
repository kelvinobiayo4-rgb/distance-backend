const express = require("express");
const router = express.Router();

// Example endpoint
router.post("/save-location", (req, res) => {
  const { userId, latitude, longitude } = req.body;

  if (!userId || !latitude || !longitude) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  return res.json({
    status: "success",
    message: "Location saved",
    data: { userId, latitude, longitude }
  });
});

module.exports = router;
