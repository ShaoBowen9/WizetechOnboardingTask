"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Loader2,
  CheckCircle,
  AlertCircle,
  Sparkles,
  FileText,
  Mail,
  Lightbulb,
  Target,
  Users,
  Rocket,
  ArrowLeft,
  Send,
} from "lucide-react"
import Link from "next/link"

export default function CreatePostPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const supabase = createClient()

    // Get the current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      setError("You must be logged in to create a post.")
      setIsLoading(false)
      return
    }

    const { error: insertError } = await supabase.from("posts").insert({
      user_id: user.id,
      title,
      description,
      contact_email: contactEmail || user.email,
    })

    if (insertError) {
      setError(insertError.message)
    } else {
      setSuccess(true)
      setTimeout(() => {
        router.push("/account") // Redirect to account page or posts list
      }, 2000)
    }

    setIsLoading(false)
  }

  const isFormValid = title.trim() && description.trim()

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Card className="p-4 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/account"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Account
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800 font-medium">Create New Post</span>
            </div>
          </Card>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-500 mr-2" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Create Your Post
            </h1>
            <Sparkles className="h-8 w-8 text-pink-500 ml-2" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your startup opportunity with our community of talented professionals
          </p>
          <Badge variant="secondary" className="mt-4 bg-purple-100 text-purple-700 px-4 py-2">
            <Plus className="h-4 w-4 mr-2" />
            Free to post
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-800">Post Details</CardTitle>
                    <p className="text-gray-600">Tell us about your opportunity</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Title Field */}
                  <Card className="p-6 bg-white/40 border-0 hover:bg-white/60 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <label className="text-base font-semibold text-gray-800 block">Job Title *</label>
                          <p className="text-sm text-gray-600">What position are you looking to fill?</p>
                        </div>
                        <Input
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                          placeholder="e.g., Senior Frontend Developer, Product Manager, Co-founder"
                          className="border-0 bg-white focus:bg-white focus:ring-2 focus:ring-purple-200 transition-all h-12 text-base text-black"
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Description Field */}
                  <Card className="p-6 bg-white/40 border-0 hover:bg-white/60 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <label className="text-base font-semibold text-gray-800 block">Job Description *</label>
                          <p className="text-sm text-gray-600">
                            Describe the role, requirements, and what makes your startup special
                          </p>
                        </div>
                        <Textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                          placeholder="Tell us about the role, your startup, what you're building, the skills you're looking for, and why someone should join your team..."
                          className="border-0 bg-white focus:bg-white focus:ring-2 focus:ring-purple-200 transition-all min-h-[120px] text-base resize-none"
                          rows={6}
                        />
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">
                            {description.length}/500 characters {description.length >= 100 ? "✓" : ""}
                          </span>
                          {description.length >= 100 && (
                            <Badge className="bg-green-100 text-green-700 border-0">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Good length
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Contact Email Field */}
                  <Card className="p-6 bg-white/40 border-0 hover:bg-white/60 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <label className="text-base font-semibold text-gray-800 block">Contact Email</label>
                          <p className="text-sm text-gray-600">
                            How should candidates reach you? (defaults to your account email)
                          </p>
                        </div>
                        <Input
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="Your email (default: your account email)"
                          type="email"
                          className="border-0 bg-white focus:bg-white focus:ring-2 focus:ring-purple-200 transition-all h-12 text-base text-black"
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Error Message */}
                  {error && (
                    <Card className="p-4 bg-gradient-to-r from-red-50/80 to-pink-50/80 border-0 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                          <AlertCircle className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-red-800">Oops! Something went wrong</p>
                          <p className="text-sm text-red-700">{error}</p>
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Success Message */}
                  {success && (
                    <Card className="p-4 bg-gradient-to-r from-green-50/80 to-emerald-50/80 border-0 shadow-lg animate-in slide-in-from-bottom-2 duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-green-800">Success! Your post has been created</p>
                          <p className="text-sm text-green-700">Redirecting you to your account...</p>
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isLoading || !isFormValid || success}
                      className={`
                        w-full h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200
                        ${
                          success
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                            : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-[1.02]"
                        }
                      `}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                          Creating Your Post...
                        </>
                      ) : success ? (
                        <>
                          <CheckCircle className="mr-3 h-5 w-5" />
                          Post Created Successfully!
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Publish Your Post
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips Card */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  Writing Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Be specific about the role and requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mention your startup's mission and vision</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Include salary range and equity details</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Highlight growth opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Users className="h-5 w-5 text-purple-500" />
                  Platform Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    50,000+
                  </div>
                  <div className="text-sm text-gray-600">Active job seekers</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                    2,500+
                  </div>
                  <div className="text-sm text-gray-600">Startup companies</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">Response rate</div>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Rocket className="h-5 w-5 text-orange-500" />
                  Success Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CheckCircle key={star} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    "We found our perfect CTO within 2 weeks of posting. The quality of candidates was exceptional!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">SJ</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Sarah Johnson</p>
                      <p className="text-xs text-gray-600">CEO at TechFlow</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
