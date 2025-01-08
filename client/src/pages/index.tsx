import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import api from "@/utils/api";
import { Blog } from "@/types";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await api.get("/blogs");
      setBlogs(response.data);
      setLoading(false);
    } catch (error: any) {
      toast.error("Failed to fetch blogs");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="text-center">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Blog Management
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">
                {blog.content.substring(0, 150)}...
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  By{" "}
                  {typeof blog.author === "object"
                    ? blog.author.username
                    : "Unknown"}
                </span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}

          {blogs.length === 0 && (
            <div className="col-span-full text-center text-gray-500">
              No blogs available.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
