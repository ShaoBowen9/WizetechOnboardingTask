import type React from "react"
import { EnvVarWarning } from "@/components/env-var-warning"
import { AuthButton } from "@/components/auth-button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { hasEnvVars } from "@/lib/utils"
import Link from "next/link"
import { Rocket, Sparkles } from "lucide-react"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center">
        <div className="flex-1 w-full flex flex-col items-center">
          {/* Enhanced Navigation */}
          <nav className="w-full backdrop-blur-sm bg-white/70 border-b border-white/20 sticky top-0 z-50">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center p-4 px-6">
              <div className="flex gap-8 items-center">
                <Link href="/" className="flex items-center group">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-105 transition-transform">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    StartupJobs
                  </span>
                </Link>

                <div className="flex items-center gap-6">
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow hover:from-purple-600 hover:to-pink-600 transition-none"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">{!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}</div>
            </div>
          </nav>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col w-full max-w-6xl px-6 py-8">{children}</div>

          {/* Enhanced Footer */}
          <footer className="w-full backdrop-blur-sm bg-white/70 border-t border-white/20 mt-auto">
            <div className="w-full max-w-6xl mx-auto flex items-center justify-center gap-8 py-8 px-6">
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-500" />
                  <p>
                    Powered by{" "}
                    <a
                      href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                      target="_blank"
                      className="font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                      rel="noreferrer"
                    >
                      Supabase
                    </a>
                  </p>
                </div>

                <div className="w-px h-4 bg-gray-300" />

                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Theme:</span>
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
