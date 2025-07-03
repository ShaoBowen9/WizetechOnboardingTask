import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Rocket, Users, TrendingUp, MapPin, Briefcase, Star, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AuthButton } from "@/components/auth-button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">StartupJobs</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            Find Jobs
          </Link>
          <Link href="#employers" className="text-sm font-medium hover:underline underline-offset-4">
            For Employers
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <AuthButton />
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {"#1 Platform for Startup Careers"}
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Dream Job at a <span className="text-primary">Startup</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with innovative startups that are changing the world. Discover opportunities where your impact
                  matters and your career can skyrocket.
                </p>
              </div>

              {/* Search Bar */}
              <div className="w-full max-w-2xl space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Job title, keywords, or company" className="pl-10 h-12" />
                  </div>
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Location or remote" className="pl-10 h-12" />
                  </div>
                  <Button size="lg" className="h-12 px-8">
                    Search Jobs
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Popular searches:{" "}
                  <span className="text-primary cursor-pointer hover:underline">Frontend Developer</span>,{" "}
                  <span className="text-primary cursor-pointer hover:underline">Product Manager</span>,{" "}
                  <span className="text-primary cursor-pointer hover:underline">Remote</span>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2,500+</div>
                  <div className="text-sm text-muted-foreground">Startups</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50,000+</div>
                  <div className="text-sm text-muted-foreground">Job Seekers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Startups */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trusted by Leading Startups</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Join thousands of innovative companies that use StartupJobs to find exceptional talent
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center">
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
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose StartupJobs?</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                We understand the startup ecosystem and connect you with opportunities that match your ambition
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Rocket className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Startup-Focused</CardTitle>
                  <CardDescription>Every job is from a verified startup, from early-stage to unicorns</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Verified startup companies
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Equity information included
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Company stage transparency
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Direct Access</CardTitle>
                  <CardDescription>Connect directly with founders and hiring managers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Skip the recruiters
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Faster hiring process
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Personal connections
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>High Growth</CardTitle>
                  <CardDescription>Join companies with exponential growth potential</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Rapid career advancement
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Equity upside potential
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Learn cutting-edge skills
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Get started in minutes and land your dream startup job
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Build a compelling profile that showcases your skills and startup experience
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold">Discover Opportunities</h3>
                <p className="text-muted-foreground">
                  Browse curated startup jobs with detailed company insights and equity information
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold">Get Hired</h3>
                <p className="text-muted-foreground">
                  Apply directly to founders and get fast-tracked through the hiring process
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Hear from professionals who found their dream startup jobs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    "StartupJobs helped me find my role at a Series A fintech startup. The direct access to founders
                    made all the difference."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-semibold">SJ</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Product Manager at FinTech Co</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    "The equity transparency and company insights helped me make an informed decision. Now I'm employee
                    #15 at a unicorn!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-semibold">MC</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Mike Chen</p>
                      <p className="text-xs text-muted-foreground">Senior Engineer at TechUnicorn</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    "I went from corporate to startup in 2 weeks. The platform made it easy to find companies that
                    matched my values."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-semibold">AR</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Alex Rodriguez</p>
                      <p className="text-xs text-muted-foreground">Marketing Lead at GreenTech</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Launch Your Startup Career?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Join thousands of professionals who have found their dream jobs at innovative startups
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" variant="secondary" className="h-12 px-8">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Find Jobs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/account">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Post a Job
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-primary-foreground/60">Free to join • No spam • Cancel anytime</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center space-x-2">
          <Rocket className="h-5 w-5 text-primary" />
          <span className="font-semibold">StartupJobs</span>
        </div>
        <p className="text-xs text-muted-foreground sm:ml-4">© 2024 StartupJobs. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/dashboard" className="text-xs hover:underline underline-offset-4">
            Find Jobs
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="/about" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Blog
          </Link>
        </nav>
      </footer>
    </div>
  )
}
