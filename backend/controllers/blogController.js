const Blog = require("../models/Blog");

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      ...req.body,
      author: req.user._id,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all blogs for logged in user
const getMyBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    console.log("Fetching all blogs..."); // Debug log
    const blogs = await Blog.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });
    console.log("Found blogs:", blogs); // Debug log
    res.json(blogs);
  } catch (error) {
    console.error("Error in getAllBlogs:", error); // Debug log
    res.status(500).json({ message: error.message });
  }
};

// Get single blog
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate("author", "username")
      .select("-__v");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(500).json({ message: "Server error" });
  }
};

// Update blog
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      _id: req.params.id,
      author: req.user._id,
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    Object.assign(blog, req.body);
    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({
      _id: req.params.id,
      author: req.user._id,
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlog,
  getMyBlogs,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};
