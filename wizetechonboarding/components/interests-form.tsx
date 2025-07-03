"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Save, Loader2, CheckCircle, Heart, Code, Briefcase } from "lucide-react"

interface InterestsFormProps {
  userId: string
  initialInterests?: {
    interest1: string
    interest2: string
    interest3: string
  }
}

export function InterestsForm({ userId, initialInterests }: InterestsFormProps) {
  const [interests, setInterests] = useState({
    interest1: initialInterests?.interest1 || "",
    interest2: initialInterests?.interest2 || "",
    interest3: initialInterests?.interest3 || "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSave = async () => {
    setIsLoading(true)
    setError(null)
    const supabase = createClient()

    try {
      const { data, error } = await supabase
        .from("user_interests")
        .upsert(
          {
            user_id: userId,
            interest1: interests.interest1,
            interest2: interests.interest2,
            interest3: interests.interest3,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id" }
        )

      console.log("Upsert response:", { data, error })
      if (error) {
        console.log(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
        setError("Failed to save interests.")
        console.error("Supabase error:", error)
        return
      }

      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 3000)
    } catch (err: any) {
      setError(err.message || "Failed to save interests.")
      console.error("Error saving interests:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const interestIcons = [
    { icon: Code, gradient: "from-purple-500 to-pink-500" },
    { icon: Briefcase, gradient: "from-pink-500 to-orange-500" },
    { icon: Heart, gradient: "from-orange-500 to-purple-500" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-gray-600 leading-relaxed">
          Help us understand what kind of opportunities excite you most. This helps us recommend the perfect startup
          matches for your career goals.
        </p>
      </div>

      <div className="grid gap-6">
        {[
          {
            key: "interest1" as keyof typeof interests,
            label: "Primary Interest",
            placeholder: "e.g., Frontend Development, React, TypeScript",
            description: "What's your main area of expertise or passion?",
          },
          {
            key: "interest2" as keyof typeof interests,
            label: "Secondary Interest",
            placeholder: "e.g., Product Management, UX Design, Data Science",
            description: "What else are you interested in exploring?",
          },
          {
            key: "interest3" as keyof typeof interests,
            label: "Emerging Interest",
            placeholder: "e.g., AI/ML, Web3, Climate Tech, FinTech",
            description: "Any new areas you'd like to dive into?",
          },
        ].map((field, index) => {
          const IconComponent = interestIcons[index].icon
          return (
            <Card key={field.key} className="p-6 bg-white/40 border-0 hover:bg-white/60 transition-all group">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${interestIcons[index].gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <Label htmlFor={field.key} className="text-base font-semibold text-gray-800">
                        {field.label}
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">{field.description}</p>
                    </div>
                    <Input
                      id={field.key}
                      value={interests[field.key]}
                      onChange={(e) => setInterests((prev) => ({ ...prev, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      className="border-0 bg-white/80 focus:bg-white focus:ring-2 focus:ring-purple-200 transition-all h-12 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Save Button */}
      <div className="pt-6">
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className={`
            w-full h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200
            ${
              isSaved
                ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-[1.02]"
            }
          `}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-3 h-5 w-5 animate-spin" />
              Saving Your Interests...
            </>
          ) : isSaved ? (
            <>
              <CheckCircle className="mr-3 h-5 w-5" />
              Interests Saved Successfully!
            </>
          ) : (
            <>
              <Save className="mr-3 h-5 w-5" />
              Save My Interests
            </>
          )}
        </Button>
      </div>

      {/* Success Message */}
      {isSaved && (
        <Card className="p-4 bg-gradient-to-r from-green-50/80 to-emerald-50/80 border-0 shadow-lg animate-in slide-in-from-bottom-2 duration-300">
          <CardContent className="p-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-green-800">Perfect! Your interests have been updated.</p>
                <p className="text-sm text-green-700">We'll use this to find better matches for you.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips Section */}
      <Card className="p-6 bg-gradient-to-r from-blue-50/80 to-purple-50/80 border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">💡 Pro Tips</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Be specific about technologies, frameworks, or methodologies you love</li>
                <li>• Include both current skills and areas you want to grow into</li>
                <li>• Think about industry verticals that excite you (FinTech, HealthTech, etc.)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
