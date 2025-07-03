import { Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AuthButton } from "@/components/auth-button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (copied from homepage) */}
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

      <main className="flex-1 bg-background">
        <section className="max-w-3xl mx-auto py-16 px-4">
          <div className="flex flex-col items-center mb-10">
            <Image src="/clipart-teamwork.png" alt="Teamwork Clipart" width={180} height={180} className="mb-6 rounded-xl shadow-lg" />
            <h1 className="text-4xl font-bold mb-4 text-center">About StartupJobs</h1>
            <p className="text-lg text-muted-foreground text-center max-w-2xl">
              StartupJobs is the leading platform connecting talented professionals with innovative startups. Our mission is to empower job seekers to find meaningful opportunities and help startups discover exceptional talent to drive their growth.
            </p>
          </div>

          <div className="space-y-6 text-base text-foreground">
            <p>
              At StartupJobs, we believe that the future belongs to those who dare to innovate. Our platform is designed to bridge the gap between ambitious individuals and the startups that are shaping tomorrow's world. Whether you're looking to join a fast-growing company or seeking the perfect candidate to join your team, StartupJobs is your trusted partner in the startup ecosystem.
            </p>
            <p>
              We offer a curated selection of job opportunities from early-stage ventures to established unicorns. Our team is passionate about startups and committed to providing a seamless experience for both job seekers and employers. With advanced search tools, transparent company profiles, and direct access to founders, we make the job search process efficient and rewarding.
            </p>
            <p>
              Our values are rooted in transparency, innovation, and community. We strive to foster a supportive environment where professionals can grow their careers and startups can build world-class teams. Join thousands of users who have found their dream jobs and made lasting connections through StartupJobs.
            </p>
            <p>
              Ready to take the next step in your career or grow your startup? Explore our platform, connect with like-minded individuals, and be part of a movement that's changing the way the world works.
            </p>
          </div>

          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-1">Email: <a href="mailto:info@startupjobs.com" className="underline">info@startupjobs.com</a></p>
            <p className="mb-1">Phone: <a href="tel:+1234567890" className="underline">+1 (234) 567-890</a></p>
            <p>Address: 123 Startup Lane, Innovation City, CA 90000</p>
          </div>
        </section>
      </main>
    </div>
  );
}
