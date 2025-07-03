import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();

  const prompt = `
    Summarize the following job post and describe the qualities of a good fit for this role.
    Title: ${title}
    Description: ${description}
    Respond in two sections: 1) Summary, 2) Good Fit Qualities.
    Be short and concise. Remember, you are an assistant to help the reader to understand the job post and the qualities of a good fit for this role. 
  `;

  const apiKey = process.env.GEMINI_API_KEY;
  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = await geminiRes.json();
  console.log("Gemini API response:", JSON.stringify(data, null, 2));

  const summary =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available.";

  return NextResponse.json({ summary });
}
