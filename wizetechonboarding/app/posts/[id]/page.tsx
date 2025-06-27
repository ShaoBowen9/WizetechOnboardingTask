import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!post) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4 text-muted-foreground">{post.description}</p>
      <div className="mb-2 text-sm text-muted-foreground">
        Posted: {new Date(post.created_at).toLocaleString()}
      </div>
      <div className="mb-2 text-sm">
        Contact: <a href={`mailto:${post.contact_email}`} className="underline">{post.contact_email}</a>
      </div>
    </div>
  );
}