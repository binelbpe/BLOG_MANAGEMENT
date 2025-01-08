import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { withAuth } from "@/middleware/withAuth";
import api from "@/utils/api";
import { Blog } from "@/types";
import toast from "react-hot-toast";

function Dashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await api.get("/blogs/my-blogs");
      setBlogs(response.data);
    } catch (error: any) {
      toast.error("Failed to fetch blogs");
    }
  };


  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Blogs</h1>
          <button
            onClick={() => router.push("/blogs/new")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create New Blog
          </button>
        </div>

        <div className="grid gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">
                {blog.content.substring(0, 200)}...
              </p>
              <div className="flex justify-end space-x-4">
              
              </div>
            </div>
          ))}

          {blogs.length === 0 && (
            <p className="text-center text-gray-500">
              You haven't created any blogs yet.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Dashboard);
