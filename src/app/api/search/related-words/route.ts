import { NextResponse } from "next/server";

export async function GET() {
  const searchQuery = "aggressive";
  const response = await fetch(
    `https://api.wordnik.com/v4/word.json/${searchQuery}/relatedWords?useCanonical=false&limitPerRelationshipType=5&api_key=${process.env.WORDNIK_API_KEY}`
  );
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
  const data = await response.json();
  return NextResponse.json(data);
}
