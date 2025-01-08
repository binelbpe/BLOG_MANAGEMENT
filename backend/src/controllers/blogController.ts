import { Request, Response } from "express";
import Blog from "../models/Blog";
import { validate, schemas } from "../middleware/validate";
import mongoose from "mongoose";

//Create Blog
export const createBlog = [
  validate(schemas.blog),
  async (req: Request, res: Response) => {
    try {
      const { title, content } = req.body;
      const userId = req.user?.id;

      const blog = new Blog({
        title,
        content,
        author: userId,
      });

      await blog.save();
      await blog.populate("author", "username");

      res.status(201).json(blog);
    } catch (error) {
      console.error("Create blog error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
];

// Get All Blogs
export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .populate("author", "username")
      .exec();

    res.json(blogs);
  } catch (error) {
    console.error("Get all blogs error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get User's Blogs
export const getUserBlogs = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const blogs = await Blog.find({ author: userId })
      .sort({ createdAt: -1 })
      .populate("author", "username")
      .exec();

    res.json(blogs);
  } catch (error) {
    console.error("Get user blogs error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Single Blog
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }

    const blog = await Blog.findById(id).populate("author", "username");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error("Get blog error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update Blog
export const updateBlog = [
  validate(schemas.blog),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const userId = req.user?.id;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid blog ID" });
      }

      const blog = await Blog.findById(id);

      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }

      if (blog.author.toString() !== userId) {
        return res.status(403).json({ message: "Not authorized to update this blog" });
      }

      blog.title = title;
      blog.content = content;
      blog.updatedAt = new Date();
      
      await blog.save();
      await blog.populate("author", "username");

      res.json(blog);
    } catch (error) {
      console.error("Update blog error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
];

// Delete Blog
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.author.toString() !== userId) {
      return res.status(403).json({ message: "Not authorized to delete this blog" });
    }

    await blog.deleteOne();
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Delete blog error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Search Blogs
export const searchBlogs = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: "Search query is required" });
    }

    const blogs = await Blog.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
      ],
    })
      .sort({ createdAt: -1 })
      .populate("author", "username")
      .exec();

    res.json(blogs);
  } catch (error) {
    console.error("Search blogs error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};