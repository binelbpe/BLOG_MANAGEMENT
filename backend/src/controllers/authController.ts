import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { validate, schemas } from "../middleware/validate";

// Register User
export const register = [
  validate(schemas.register),
  async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;

      // Check for existing user
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });

      if (existingUser) {
        if (existingUser.email === email) {
          return res.status(400).json({
            message: "Validation failed",
            errors: {
              email: "Email is already registered",
            },
          });
        }
        if (existingUser.username === username) {
          return res.status(400).json({
            message: "Validation failed",
            errors: {
              username: "Username is already taken",
            },
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

      // Generate JWT
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "24h" }
      );

      res.status(201).json({
        message: "User registered successfully",
        token,
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
  },
];

// Login User
export const login = [
  validate(schemas.login),
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

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

      // Generate JWT
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "24h" }
      );

      res.json({
        message: "Login successful",
        token,
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
  },
];

// Get Current User
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update User Profile
export const updateProfile = [
  validate(
    schemas.register.fork(["password"], (schema) => schema.optional())
  ),
  async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const { username, email, password } = req.body;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if email/username is taken by another user
      if (email !== user.email || username !== user.username) {
        const existingUser = await User.findOne({
          $and: [
            { _id: { $ne: userId } },
            { $or: [{ email }, { username }] },
          ],
        });

        if (existingUser) {
          if (existingUser.email === email) {
            return res.status(400).json({
              message: "Validation failed",
              errors: {
                email: "Email is already registered",
              },
            });
          }
          if (existingUser.username === username) {
            return res.status(400).json({
              message: "Validation failed",
              errors: {
                username: "Username is already taken",
              },
            });
          }
        }
      }

      // Update user fields
      user.username = username;
      user.email = email.toLowerCase();

      if (password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }

      await user.save();

      res.json({
        message: "Profile updated successfully",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Update profile error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
]; 