"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, Loader2 } from "lucide-react";

interface InterestsFormProps {
  userId: string;
  initialInterests?: {
    interest1: string;
    interest2: string;
    interest3: string;
  };
}

export function InterestsForm({ userId, initialInterests }: InterestsFormProps) {
  const [interests, setInterests] = useState({
    interest1: initialInterests?.interest1 || "",
    interest2: initialInterests?.interest2 || "",
    interest3: initialInterests?.interest3 || "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    const supabase = createClient();

    try {
      const { error } = await supabase
        .from("user_interests")
        .upsert({
          user_id: userId,
          interest1: interests.interest1,
          interest2: interests.interest2,
          interest3: interests.interest3,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    } catch (error) {
      console.error("Error saving interests:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Interests</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="interest1">Interest 1</Label>
            <Input
              id="interest1"
              value={interests.interest1}
              onChange={(e) => setInterests(prev => ({ ...prev, interest1: e.target.value }))}
              placeholder="e.g., Frontend Development"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interest2">Interest 2</Label>
            <Input
              id="interest2"
              value={interests.interest2}
              onChange={(e) => setInterests(prev => ({ ...prev, interest2: e.target.value }))}
              placeholder="e.g., Product Management"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interest3">Interest 3</Label>
            <Input
              id="interest3"
              value={interests.interest3}
              onChange={(e) => setInterests(prev => ({ ...prev, interest3: e.target.value }))}
              placeholder="e.g., AI/ML"
            />
          </div>
        </div>
        <Button 
          onClick={handleSave} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              {isSaved ? "Saved!" : "Save Interests"}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}