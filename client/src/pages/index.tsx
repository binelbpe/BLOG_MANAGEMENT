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
      console.log("Fetching blogs...");
      const response = await api.get("/blogs");
      console.log("API Response:", response.data);
      setBlogs(response.data);
      setLoading(false);
    } catch (error: any) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to fetch blogs");
      setLoading(false);
    }
  };

  console.log("Current blogs state:", blogs);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16 mb-12 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Blog Community
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Discover stories, ideas, and insights from our community of writers.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4">
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No blogs available yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group"
              >
                {/* Author Info */}
                <div className="p-6 flex-1">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {typeof blog.author === "object"
                        ? blog.author.username.charAt(0).toUpperCase()
                        : "U"}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800">
                        {typeof blog.author === "object"
                          ? blog.author.username
                          : "Unknown"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.content}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-2 transition-transform duration-200"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      {new Date(blog.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
