const express = require('express');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// Profile route
router.get('/', verifyToken, (req, res) => {
  res.send(`Welcome to your profile, user ${req.user.userId}`);
});

module.exports = router;
