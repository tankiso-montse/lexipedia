import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}:{params: Promise<{word: string}>}) {
  const word = (await params).word;
  const response = await fetch(
    `https://api.wordnik.com/v4/word.json/${word}/audio?useCanonical=false&limit=50&api_key=${process.env.WORDNIK_API_KEY}`
  );
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch audio data" },
      { status: 500 }
    );
  }
  const data = await response.json();
  return NextResponse.json(data);
}
