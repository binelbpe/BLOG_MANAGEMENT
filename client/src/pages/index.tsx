import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import api from "@/utils/api";
import { Blog } from "@/types";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Home() {
  const [loading, setLoading] = useState(true);


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

       
      </div>
    </Layout>
  );
}
