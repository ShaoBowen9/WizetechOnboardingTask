import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Star,
  Bookmark,
  Share2,
  Eye,
  Building,
  Zap,
  Target,
  Award,
  Coffee,
  Wifi,
  Car,
  Heart,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Globe,
  Linkedin,
  Twitter,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { GeminiSummary } from "@/components/gemini-summary"

export default async function PostDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const supabase = await createClient()
  const { data: post } = await supabase.from("posts").select("*").eq("id", params.id).single()

  if (!post) return notFound()

  // Mock data for enhanced UI
  const mockCompany = {
    name: "TechFlow Innovations",
    logo: "/placeholder.svg?height=80&width=80",
    size: "50-100 employees",
    founded: "2019",
    funding: "Series B",
    location: "San Francisco, CA",
    website: "techflow.com",
    industry: "FinTech",
    rating: 4.8,
    reviews: 127,
  }

  const mockJobDetails = {
    salary: "$120k - $180k",
    equity: "0.1% - 0.5%",
    experience: "3-5 years",
    type: "Full-time",
    remote: "Hybrid",
    benefits: [
      "Health, Dental & Vision Insurance",
      "Unlimited PTO",
      "401(k) with matching",
      "Stock options",
      "Learning & Development budget",
      "Home office stipend",
    ],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    perks: ["Free lunch", "Gym membership", "Flexible hours", "Pet-friendly office"],
  }

  const mockSimilarPosts = [
    { id: "1", title: "Senior Frontend Engineer", company: "DataViz Pro", location: "Remote" },
    { id: "2", title: "Full Stack Developer", company: "CloudSync", location: "NYC" },
    { id: "3", title: "React Developer", company: "StartupX", location: "Austin" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Card className="p-4 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Jobs
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{mockCompany.name}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800 font-medium truncate">{post.title}</span>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-0">
                          <Zap className="h-3 w-3 mr-1" />
                          Actively Hiring
                        </Badge>
                        <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0">
                          Featured
                        </Badge>
                      </div>
                      <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{mockCompany.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{mockCompany.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>1,247 views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <FileText className="h-5 w-5 text-purple-500" />
                  Job Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">{post.description}</p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Do</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          Build and maintain scalable web applications using modern technologies
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          Collaborate with cross-functional teams to deliver high-quality products
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          Participate in code reviews and contribute to technical decisions
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          Mentor junior developers and help grow the engineering team
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">What We're Looking For</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <Target className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          3+ years of experience with React and TypeScript
                        </li>
                        <li className="flex items-start gap-2">
                          <Target className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          Strong understanding of modern web development practices
                        </li>
                        <li className="flex items-start gap-2">
                          <Target className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          Experience with cloud platforms (AWS, GCP, or Azure)
                        </li>
                        <li className="flex items-start gap-2">
                          <Target className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          Passion for building user-centric products
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Technologies */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <GraduationCap className="h-5 w-5 text-pink-500" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {mockJobDetails.skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      className={`
                        px-4 py-2 text-sm font-medium border-0
                        ${index % 3 === 0 ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700" : ""}
                        ${index % 3 === 1 ? "bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700" : ""}
                        ${index % 3 === 2 ? "bg-gradient-to-r from-orange-100 to-purple-100 text-orange-700" : ""}
                      `}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Company Culture */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Heart className="h-5 w-5 text-red-500" />
                  Company Culture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Coffee, label: "Free Lunch", color: "from-amber-500 to-orange-500" },
                    { icon: Wifi, label: "Remote Friendly", color: "from-blue-500 to-purple-500" },
                    { icon: Car, label: "Parking", color: "from-green-500 to-emerald-500" },
                    { icon: Award, label: "Learning Budget", color: "from-pink-500 to-red-500" },
                  ].map((perk) => (
                    <div
                      key={perk.label}
                      className="text-center p-4 rounded-xl bg-white/40 hover:bg-white/60 transition-all"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${perk.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                      >
                        <perk.icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{perk.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Button */}
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 shadow-xl text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                <Button
                  size="lg"
                  className="w-full bg-white text-purple-600 hover:bg-gray-50 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Apply Now
                </Button>
                <p className="text-sm text-white/80 mt-3">
                  Contact: <span className="font-medium">{post.contact_email}</span>
                </p>
              </CardContent>
            </Card>

            {/* Job Details */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Briefcase className="h-5 w-5 text-purple-500" />
                  Job Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Salary</span>
                  </div>
                  <span className="font-semibold text-gray-800">{mockJobDetails.salary}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-600">Equity</span>
                  </div>
                  <span className="font-semibold text-gray-800">{mockJobDetails.equity}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Experience</span>
                  </div>
                  <span className="font-semibold text-gray-800">{mockJobDetails.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-pink-500" />
                    <span className="text-sm text-gray-600">Work Style</span>
                  </div>
                  <span className="font-semibold text-gray-800">{mockJobDetails.remote}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Posted</span>
                  </div>
                  <span className="font-semibold text-gray-800">{new Date(post.created_at).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Building className="h-5 w-5 text-blue-500" />
                  About {mockCompany.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{mockCompany.name}</p>
                    <p className="text-sm text-gray-600">{mockCompany.industry}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Company Size</span>
                    <span className="font-medium text-gray-800">{mockCompany.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Founded</span>
                    <span className="font-medium text-gray-800">{mockCompany.founded}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Funding</span>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-0">
                      {mockCompany.funding}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-800">{mockCompany.rating}</span>
                      <span className="text-sm text-gray-500">({mockCompany.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-200 hover:bg-purple-50 bg-transparent"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Website
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Award className="h-5 w-5 text-green-500" />
                  Benefits & Perks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockJobDetails.benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  Similar Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockSimilarPosts.map((similarPost, index) => (
                  <div
                    key={similarPost.id}
                    className="p-3 rounded-lg bg-white/40 hover:bg-white/60 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                          {similarPost.title}
                        </p>
                        <p className="text-sm text-gray-600">{similarPost.company}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        <GeminiSummary title={post.title} description={post.description} />
      </div>
    </div>
  )
}
