import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { word: string } }) {
  const word = await params.word;
  const response = await fetch(
    `https://api.wordnik.com/v4/word.json/${word}/topExample?useCanonical=false&api_key=${process.env.WORDNIK_API_KEY}`
  );
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch word example data" },
      { status: 500 }
    );
  }
  const data = await response.json();
  return NextResponse.json(data);
}
