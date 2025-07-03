"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GeminiSummary({ title, description }: { title: string; description: string }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    setLoading(true);
    setError(null);
    setSummary(null);
    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      const data = await res.json();
      if (data.summary) setSummary(data.summary);
      else setError("No summary returned.");
    } catch (err) {
      setError("Failed to get summary.");
    }
    setLoading(false);
  };

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow">
      <Button onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize with Gemini AI"}
      </Button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {summary && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Gemini AI Summary</h3>
          <pre className="whitespace-pre-wrap text-gray-800">{summary}</pre>
        </div>
      )}
    </div>
  );
} 