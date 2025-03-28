import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = process.env.DICTIONARY_API_URL;
  const apiKey =process.env.DICTIONARY_API_KEY;
  const searchQuery = 'fish';
  const response = await fetch(`${url}${searchQuery}?key=${apiKey}`)
  const data = await response.json();

  return NextResponse.json(data)
  
}