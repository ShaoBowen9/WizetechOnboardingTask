import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import { InterestsForm } from "@/components/interests-form";
import { MyPosts } from "@/components/my-posts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Heart, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AccountPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  // Fetch existing interests
  const { data: interestsData } = await supabase
    .from("user_interests")
    .select("*")
    .eq("user_id", data.user.id)
    .single();

  // Fetch user's posts
  const { data: postsData } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", data.user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is your account page. You can only see this as an authenticated user.
        </div>
      </div>
      
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="interests" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Interests
          </TabsTrigger>
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            My Posts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-6">
          <div className="flex flex-col gap-2 items-start">
            <h2 className="font-bold text-2xl mb-4">Account Details</h2>
            <div className="text-sm">
              <div><span className="font-semibold">Email:</span> {data.user.email}</div>
              <div><span className="font-semibold">Date Created:</span> {new Date(data.user.created_at).toLocaleString()}</div>
              <div><span className="font-semibold">Password:</span> ********</div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="interests" className="mt-6">
          <InterestsForm 
            userId={data.user.id} 
            initialInterests={interestsData}
          />
        </TabsContent>

        <TabsContent value="posts" className="mt-6">
          <div className="flex justify-end mb-4">
            <Button asChild>
              <Link href="/posts/create">
                <Plus className="h-4 w-4 mr-2" />
                Create New Post
              </Link>
            </Button>
          </div>
          {(postsData?.length ?? 0) === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No posts yet. Create your first post to get started!</p>
              <Button asChild className="mt-4">
                <Link href="/posts/create">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Post
                </Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {(postsData ?? []).map((post) => (
                <div
                  key={post.id}
                  className="p-4 border rounded-lg"
                >
                  <h3 className="font-semibold">{post.title}</h3>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}