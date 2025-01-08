const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

// Refresh Token
router.post("/refresh-token", authController.refreshToken);

// Logout
router.post("/logout", authController.logout);

// Logout from all devices
router.post("/logout-all", auth, authController.logoutAll);

module.exports = router;
