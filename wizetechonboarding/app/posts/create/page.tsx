"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const supabase = createClient();
    // Get the current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      setError("You must be logged in to create a post.");
      setIsLoading(false);
      return;
    }

    const { error: insertError } = await supabase.from("posts").insert({
      user_id: user.id,
      title,
      description,
      contact_email: contactEmail || user.email,
    });

    if (insertError) {
      setError(insertError.message);
    } else {
      router.push("/account"); // Redirect to account page or posts list
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Title</label>
              <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                placeholder="e.g. Looking for a co-founder"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Brief Description</label>
              <Textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
                placeholder="Describe your startup or the help you need..."
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Contact Email</label>
              <Input
                value={contactEmail}
                onChange={e => setContactEmail(e.target.value)}
                placeholder="Your email (default: your account email)"
                type="email"
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Posting..." : "Post"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}