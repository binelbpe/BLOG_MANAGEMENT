const bcrypt = require("bcryptjs");
const User = require("../models/user");
const tokenUtils = require("../utils/tokenUtils");

// Register User
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check existing user
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({
          message: "Validation failed",
          errors: { email: "Email is already registered" },
        });
      }
      if (existingUser.username === username) {
        return res.status(400).json({
          message: "Validation failed",
          errors: { username: "Username is already taken" },
        });
      }
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = new User({
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await user.save();

    // Generate tokens
    const tokens = await tokenUtils.generateTokens(user._id);

    res.status(201).json({
      message: "User registered successfully",
      ...tokens,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login User
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({
        message: "Authentication failed",
        errors: {
          email: "Invalid email or password",
          password: "Invalid email or password",
        },
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Authentication failed",
        errors: {
          email: "Invalid email or password",
          password: "Invalid email or password",
        },
      });
    }

    // Generate tokens
    const tokens = await tokenUtils.generateTokens(user._id);

    res.json({
      message: "Login successful",
      ...tokens,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Refresh Token
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: "Refresh token is required" });
    }

    // Verify refresh token
    const decoded = await tokenUtils.verifyRefreshToken(refreshToken);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    // Revoke old refresh token
    await tokenUtils.revokeRefreshToken(refreshToken);

    // Generate new tokens
    const tokens = await tokenUtils.generateTokens(decoded.userId);

    res.json({
      message: "Tokens refreshed successfully",
      ...tokens,
    });
  } catch (error) {
    console.error("Refresh token error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logout
exports.logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (refreshToken) {
      await tokenUtils.revokeRefreshToken(refreshToken);
    }
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logout from all devices
exports.logoutAll = async (req, res) => {
  try {
    const userId = req.user?.id;
    await tokenUtils.revokeAllUserTokens(userId);
    res.json({ message: "Logged out from all devices" });
  } catch (error) {
    console.error("Logout all error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
  refreshToken,
  logout,
  logoutAll,
};
