import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Rocket,
  Users,
  TrendingUp,
  MapPin,
  Briefcase,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AuthButton } from "@/components/auth-button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Enhanced Header */}
        <header className="backdrop-blur-sm bg-white/70 border-b border-white/20 sticky top-0 z-50">
          <div className="px-4 lg:px-6 h-16 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-105 transition-transform">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StartupJobs
              </span>
        </Link>

            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
              <Link href="/dashboard" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Find Jobs
          </Link>
              <Link href="#employers" className="text-sm font-medium hover:text-purple-600 transition-colors">
            For Employers
          </Link>
              <Link href="/about" className="text-sm font-medium hover:text-purple-600 transition-colors">
            About
          </Link>
              <Button asChild className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                <Link href="/account">
                  <User className="h-4 w-4" />
                  My Account
                </Link>
              </Button>
          <AuthButton />
        </nav>
          </div>
      </header>

      <main className="flex-1">
          {/* Enhanced Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
                <div className="space-y-6">
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0 shadow-lg"
                  >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {"#1 Platform for Startup Careers"}
                </Badge>

                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-purple-500 mr-3" />
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                      Find Your Dream Job at a Startup
                </h1>
                    <Sparkles className="h-8 w-8 text-pink-500 ml-3" />
                  </div>

                  <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl leading-relaxed">
                    Connect with innovative startups that are changing the world. Discover opportunities where your
                    impact matters and your career can skyrocket.
                </p>
              </div>

                {/* Enhanced Search Bar */}
              <div className="w-full max-w-2xl space-y-4">
                  <Card className="p-6 bg-white/60 backdrop-blur-sm border-0 shadow-2xl">
                    <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-purple-500" />
                        <Input
                          placeholder="Job title, keywords, or company"
                          className="pl-12 h-12 border-0 bg-white/80 focus:bg-white transition-colors"
                        />
                  </div>
                  <div className="relative flex-1">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-pink-500" />
                        <Input
                          placeholder="Location or remote"
                          className="pl-12 h-12 border-0 bg-white/80 focus:bg-white transition-colors"
                        />
                  </div>
                      <Button
                        size="lg"
                        className="h-12 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all"
                      >
                    Search Jobs
                  </Button>
                </div>
                  </Card>

                  <p className="text-sm text-gray-600">
                  Popular searches:{" "}
                    <span className="text-purple-600 cursor-pointer hover:text-purple-700 font-medium">
                      Frontend Developer
                    </span>
                    ,{" "}
                    <span className="text-purple-600 cursor-pointer hover:text-purple-700 font-medium">
                      Product Manager
                    </span>
                    , <span className="text-purple-600 cursor-pointer hover:text-purple-700 font-medium">Remote</span>
                </p>
              </div>

                {/* Enhanced Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                  <Card className="p-6 bg-white/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        10,000+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Active Jobs</div>
                </div>
                  </Card>
                  <Card className="p-6 bg-white/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                        2,500+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Startups</div>
                </div>
                  </Card>
                  <Card className="p-6 bg-white/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                        50,000+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Job Seekers</div>
                    </div>
                  </Card>
              </div>
            </div>
          </div>
        </section>

          {/* Enhanced Featured Startups */}
          <section className="w-full py-12 md:py-24 lg:py-32 relative">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
            <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Trusted by Leading Startups
                </h2>
                <p className="text-gray-600 max-w-[600px] mx-auto text-lg">
                Join thousands of innovative companies that use StartupJobs to find exceptional talent
              </p>
            </div>

              <Card className="p-8 bg-white/60 backdrop-blur-sm border-0 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex items-center justify-center hover:opacity-100 transition-opacity">
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    width="120"
                    height="60"
                    alt={`Startup ${i}`}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
              </Card>
          </div>
        </section>

          {/* Enhanced Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Why Choose StartupJobs?
                </h2>
                <p className="text-gray-600 max-w-[600px] mx-auto text-lg">
                We understand the startup ecosystem and connect you with opportunities that match your ambition
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Startup-Focused</CardTitle>
                    <CardDescription className="text-gray-600">
                      Every job is from a verified startup, from early-stage to unicorns
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Verified startup companies</span>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Equity information included</span>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Company stage transparency</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

                <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">Direct Access</CardTitle>
                    <CardDescription className="text-gray-600">
                      Connect directly with founders and hiring managers
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Skip the recruiters</span>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Faster hiring process</span>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Personal connections</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

                <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">High Growth</CardTitle>
                    <CardDescription className="text-gray-600">
                      Join companies with exponential growth potential
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Rapid career advancement</span>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Equity upside potential</span>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Learn cutting-edge skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

          {/* Enhanced How It Works */}
          <section className="w-full py-12 md:py-24 lg:py-32 relative">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
            <div className="container px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  How It Works
                </h2>
                <p className="text-gray-600 max-w-[600px] mx-auto text-lg">
                Get started in minutes and land your dream startup job
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center space-y-6 p-8 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform">
                  1
                </div>
                  <h3 className="text-xl font-semibold text-gray-800">Create Your Profile</h3>
                  <p className="text-gray-600">
                  Build a compelling profile that showcases your skills and startup experience
                </p>
                </Card>

                <Card className="text-center space-y-6 p-8 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform">
                  2
                </div>
                  <h3 className="text-xl font-semibold text-gray-800">Discover Opportunities</h3>
                  <p className="text-gray-600">
                  Browse curated startup jobs with detailed company insights and equity information
                </p>
                </Card>

                <Card className="text-center space-y-6 p-8 bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 text-white flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform">
                  3
                </div>
                  <h3 className="text-xl font-semibold text-gray-800">Get Hired</h3>
                  <p className="text-gray-600">
                  Apply directly to founders and get fast-tracked through the hiring process
                </p>
                </Card>
            </div>
          </div>
        </section>

          {/* Enhanced Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Success Stories
                </h2>
                <p className="text-gray-600 max-w-[600px] mx-auto text-lg">
                Hear from professionals who found their dream startup jobs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Product Manager at FinTech Co",
                    initials: "SJ",
                    quote:
                      "StartupJobs helped me find my role at a Series A fintech startup. The direct access to founders made all the difference.",
                  },
                  {
                    name: "Mike Chen",
                    role: "Senior Engineer at TechUnicorn",
                    initials: "MC",
                    quote:
                      "The equity transparency and company insights helped me make an informed decision. Now I'm employee #15 at a unicorn!",
                  },
                  {
                    name: "Alex Rodriguez",
                    role: "Marketing Lead at GreenTech",
                    initials: "AR",
                    quote:
                      "I went from corporate to startup in 2 weeks. The platform made it easy to find companies that matched my values.",
                  },
                ].map((testimonial, index) => (
                  <Card
                    key={index}
                    className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <CardContent className="pt-8 pb-8">
                      <div className="flex items-center space-x-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                      <div className="flex items-center space-x-4">
                        <div
                          className={`
                          w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold
                          ${index % 3 === 0 ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}
                          ${index % 3 === 1 ? "bg-gradient-to-r from-pink-500 to-orange-500" : ""}
                          ${index % 3 === 2 ? "bg-gradient-to-r from-orange-500 to-purple-500" : ""}
                        `}
                        >
                          <span className="text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                          <p className="font-semibold text-gray-800">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
                ))}
            </div>
          </div>
        </section>

          {/* Enhanced CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="container px-4 md:px-6 relative">
              <div className="flex flex-col items-center space-y-8 text-center text-white">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Ready to Launch Your Startup Career?
                </h2>
                  <p className="mx-auto max-w-[600px] text-white/90 md:text-xl leading-relaxed">
                  Join thousands of professionals who have found their dream jobs at innovative startups
                </p>
              </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="h-12 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <Link href="/dashboard">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Find Jobs
                  <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">No fees • No spam • Cancel anytime</p>
            </div>
          </div>
        </section>
      </main>

        {/* Enhanced Footer */}
        <footer className="backdrop-blur-sm bg-white/70 border-t border-white/20">
          <div className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                StartupJobs
              </span>
        </div>
            <p className="text-sm text-gray-600 sm:ml-4">© 2024 StartupJobs. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-6">
              <Link href="/dashboard" className="text-sm hover:text-purple-600 transition-colors">
                Find Jobs
              </Link>
              <Link href="#" className="text-sm hover:text-purple-600 transition-colors">
            Privacy Policy
          </Link>
              <Link href="#" className="text-sm hover:text-purple-600 transition-colors">
            Terms of Service
          </Link>
              <Link href="/about" className="text-sm hover:text-purple-600 transition-colors">
            Contact
          </Link>
              <Link href="#" className="text-sm hover:text-purple-600 transition-colors">
            Blog
          </Link>
        </nav>
          </div>
      </footer>
      </div>
    </div>
  )
}
