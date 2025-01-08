const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const auth = require("../middleware/auth");

// Create a new blog
router.post("/", auth, blogController.createBlog);

// Get all blogs for logged in user
router.get("/my-blogs", auth, blogController.getMyBlogs);

// Get all blogs
router.get("/", blogController.getAllBlogs);

// Get single blog
router.get("/:id", blogController.getBlog);

// Update blog
router.patch("/:id", auth, blogController.updateBlog);

// Delete blog
router.delete("/:id", auth, blogController.deleteBlog);

module.exports = router;
