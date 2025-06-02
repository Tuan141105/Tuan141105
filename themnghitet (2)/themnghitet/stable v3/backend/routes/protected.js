const express = require("express");
const verifyToken = require("../middleware/auth");

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: `Welcome user ${req.user.email}` });
});

module.exports = router;
