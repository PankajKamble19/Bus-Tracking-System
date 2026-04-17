const express = require("express");
const router = express.Router();

let location = { lat: 16.7, lng: 74.2 };

router.get("/", (req, res) => {
  res.json(location);
});

router.post("/update", (req, res) => {
  location = req.body;
  res.json({ success: true });
});

module.exports = router;