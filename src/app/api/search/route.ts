import {NextResponse } from "next/server";

export async function GET() {
  const searchQuery = 'extorts';
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`);
  const data = await response.json();
  return NextResponse.json(data);
}