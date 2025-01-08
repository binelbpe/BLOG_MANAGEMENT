import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { withAuth } from "@/middleware/withAuth";
import api from "@/utils/api";
import { Blog } from "@/types";
import toast from "react-hot-toast";

function Dashboard() {
 
  const router = useRouter();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Blogs</h1>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Dashboard);
