import { NextResponse } from "next/server";

export async function GET({params}: {params: {word: string}}) {
  const { word } = params;
  const response = await fetch(
    `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=3&includeRelated=false&sourceDictionaries=all&api_key=${process.env.WORDNIK_API_KEY}`
  );
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch word definition data" },
      { status: 500 }
    );
  }
  const data = await response.json();
  return NextResponse.json(data);
}
