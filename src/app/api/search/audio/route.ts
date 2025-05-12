import { NextResponse } from "next/server";

export async function GET() {
  const searchQuery = 'people';
  const response = await fetch(`https://api.wordnik.com/v4/word.json/${searchQuery}/audio?useCanonical=false&limit=50&api_key=${process.env.WORDNIK_API_KEY}`);
  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
  const data = await response.json();
  return NextResponse.json(data);
}