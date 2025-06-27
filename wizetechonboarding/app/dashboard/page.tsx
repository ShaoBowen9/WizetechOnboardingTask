import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();

  // Fetch all posts (optionally only published)
  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, title, description, contact_email, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return <div className="text-red-500">Error loading posts: {error.message}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      {/* Navigation Bar */}
      <nav className="flex justify-end mb-8">
        <Link
          href="/account"
          className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/80 transition"
        >
          My Account
        </Link>
      </nav>
      {/* Dashboard Content */}
      <h1 className="text-3xl font-bold mb-8">All Startup Posts</h1>
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
                    Contact: <a href={`mailto:${post.contact_email}`} className="underline">{post.contact_email}</a>
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