import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { InfoIcon } from "lucide-react"
import { InterestsForm } from "@/components/interests-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Heart, FileText, Plus, Mail, Calendar, Lock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default async function AccountPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect("/auth/login")
  }

  // Fetch existing interests
  const { data: interestsData } = await supabase.from("user_interests").select("*").eq("user_id", data.user.id).single()

  // Fetch user's posts
  const { data: postsData } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", data.user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-500 mr-2" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              My Account
            </h1>
            <Sparkles className="h-8 w-8 text-pink-500 ml-2" />
          </div>
          <p className="text-xl text-gray-600">Manage your profile, interests, and job posts</p>
        </div>

        {/* Enhanced Info Banner */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <InfoIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">Welcome to your account dashboard!</p>
                <p className="text-gray-600 text-sm">This is your private space. Only you can see this content.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Tabs */}
        <Tabs defaultValue="account" className="w-full">
          <Card className="mb-8 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-2">
              <TabsList className="grid w-full grid-cols-3 bg-transparent gap-2">
                <TabsTrigger
                  value="account"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <User className="h-4 w-4" />
                  Account
                </TabsTrigger>
                <TabsTrigger
                  value="interests"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <Heart className="h-4 w-4" />
                  Interests
                </TabsTrigger>
                <TabsTrigger
                  value="posts"
                  className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <FileText className="h-4 w-4" />
                  My Posts
                </TabsTrigger>
              </TabsList>
            </CardContent>
          </Card>

          {/* Account Tab Content */}
          <TabsContent value="account" className="mt-6">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-800">Account Details</CardTitle>
                    <p className="text-gray-600">Your personal information and settings</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <Card className="p-4 bg-white/40 border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Email Address</p>
                        <p className="text-gray-800 font-semibold">{data.user.email}</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-white/40 border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Member Since</p>
                        <p className="text-gray-800 font-semibold">
                          {new Date(data.user.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-white/40 border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Lock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Password</p>
                        <p className="text-gray-800 font-semibold">••••••••</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Update Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interests Tab Content */}
          <TabsContent value="interests" className="mt-6">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-800">Your Interests</CardTitle>
                    <p className="text-gray-600">Tell us what kind of opportunities you're looking for</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <InterestsForm userId={data.user.id} initialInterests={interestsData} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Posts Tab Content */}
          <TabsContent value="posts" className="mt-6">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-800">My Posts</CardTitle>
                      <p className="text-gray-600">Manage your job postings and opportunities</p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2"
                  >
                    {postsData?.length || 0} {(postsData?.length || 0) === 1 ? "post" : "posts"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-6">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Link href="/posts/create">
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Post
                    </Link>
                  </Button>
                </div>

                {(postsData?.length ?? 0) === 0 ? (
                  <Card className="p-12 bg-white/40 border-0 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="h-10 w-10 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No posts yet</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Ready to share an opportunity? Create your first post to connect with talented professionals.
                    </p>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <Link href="/posts/create">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Your First Post
                      </Link>
                    </Button>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    {(postsData ?? []).map((post, index) => (
                      <Card
                        key={post.id}
                        className="p-6 bg-white/40 border-0 hover:bg-white/60 transition-all hover:shadow-lg group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`
                                w-3 h-3 rounded-full
                                ${index % 3 === 0 ? "bg-purple-400" : ""}
                                ${index % 3 === 1 ? "bg-pink-400" : ""}
                                ${index % 3 === 2 ? "bg-orange-400" : ""}
                              `}
                              />
                              <Badge
                                variant="secondary"
                                className={`
                                ${index % 3 === 0 ? "bg-purple-100 text-purple-700" : ""}
                                ${index % 3 === 1 ? "bg-pink-100 text-pink-700" : ""}
                                ${index % 3 === 2 ? "bg-orange-100 text-orange-700" : ""}
                              `}
                              >
                                Active
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              Created {new Date(post.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-100 hover:text-purple-700"
                          >
                            Edit
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
