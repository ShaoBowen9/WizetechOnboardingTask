"use client"

import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Rocket, User, Calendar, Mail, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

type Post = {
  id: string
  title: string
  description: string
  contact_email: string
  created_at: string
}

export default function DashboardPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, description, contact_email, created_at")
        .order("created_at", { ascending: false })

      if (error) setError(error.message)
      else setPosts(data || [])
    }

    fetchPosts()
  }, [])

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
        <div className="flex items-center justify-center min-h-screen">
          <Card className="p-8 border-red-200 bg-red-50/50">
            <div className="text-red-600 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Error loading posts</p>
              <p className="text-sm text-red-500 mt-2">{error}</p>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Enhanced Navigation Bar */}
        <nav className="backdrop-blur-sm bg-white/70 border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center group">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-105 transition-transform">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  StartupJobs
                </span>
              </Link>

              <Button asChild className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                <Link href="/account">
                  <User className="h-4 w-4" />
                  My Account
                </Link>
              </Button>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Enhanced Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-purple-500 mr-2" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Startup Opportunities
              </h1>
              <Sparkles className="h-8 w-8 text-pink-500 ml-2" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing opportunities at innovative startups
            </p>
            <Badge variant="secondary" className="mt-4 bg-purple-100 text-purple-700 px-4 py-2">
              {posts.length} {posts.length === 1 ? "opportunity" : "opportunities"} available
            </Badge>
          </div>

          {/* Content */}
          {!posts || posts.length === 0 ? (
            <div className="text-center py-20">
              <Card className="max-w-md mx-auto bg-white/60 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-10 w-10 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No posts yet</h3>
                  <p className="text-gray-600">Check back soon for new startup opportunities!</p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Link key={post.id} href={`/posts/${post.id}`} className="block group">
                  <Card className="h-full bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-white/80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <CardHeader className="relative">
                      <div className="flex items-start justify-between mb-2">
                        <Badge
                          variant="secondary"
                          className={`
                            ${index % 3 === 0 ? "bg-purple-100 text-purple-700" : ""}
                            ${index % 3 === 1 ? "bg-pink-100 text-pink-700" : ""}
                            ${index % 3 === 2 ? "bg-orange-100 text-orange-700" : ""}
                          `}
                        >
                          New
                        </Badge>
                        <div
                          className={`
                          w-3 h-3 rounded-full
                          ${index % 3 === 0 ? "bg-purple-400" : ""}
                          ${index % 3 === 1 ? "bg-pink-400" : ""}
                          ${index % 3 === 2 ? "bg-orange-400" : ""}
                        `}
                        />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative">
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.description}</p>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center text-gray-500">
                          <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                          <span>
                            Posted{" "}
                            {new Date(post.created_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        <div className="flex items-center text-gray-500">
                          <Mail className="h-4 w-4 mr-2 text-pink-500" />
                          <span className="truncate font-medium text-gray-700">{post.contact_email}</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-purple-600 group-hover:text-purple-700">
                            View Details
                          </span>
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
