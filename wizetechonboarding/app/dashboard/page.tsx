"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { useState, useEffect } from "react";

type Post = {
  id: string;
  title: string;
  description: string;
  contact_email: string;
  created_at: string;
};

export default function DashboardPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, description, contact_email, created_at")
        .order("created_at", { ascending: false });
      if (error) setError(error.message);
      else setPosts(data || []);
    }
    fetchPosts();
  }, []);

  if (error) {
    return <div className="text-red-500">Error loading posts: {error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between mb-8">
        <Link href="/" className="flex items-center justify-center">
          {/* Rocket icon and logo text, matching home page */}
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l2.25-6.75m0 0L12 3l5.25 9.75m-10.5 0h10.5m-10.5 0L12 21l5.25-8.25" /></svg>
          <span className="ml-2 text-xl font-bold">StartupJobs</span>
        </Link>
        <Link
          href="/account"
          className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/80 transition"
        >
          My Account
        </Link>
      </nav>
      {/* Dashboard Content */}
      <h1 className="text-3xl font-bold mb-8 text-center">All Startup Posts</h1>
      {(!posts || posts.length === 0) ? (
        <div className="text-center text-muted-foreground">
          <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No posts found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block"
            >
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-muted-foreground">{post.description}</p>
                  <div className="text-xs text-muted-foreground">
                    Posted: {new Date(post.created_at).toLocaleString()}
                    <br />
                    Contact: <span className="underline text-blue-600 cursor-pointer">{post.contact_email}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}