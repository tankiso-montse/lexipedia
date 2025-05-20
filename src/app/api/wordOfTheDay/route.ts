import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.WORDNIK_API_KEY}`);
  const data = await response.json();
  return NextResponse.json(data);
}