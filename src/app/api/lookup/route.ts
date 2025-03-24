import axios from "axios";

export async function GET() {
  const url = process.env.DICTIONARY_API_URL;
  const apiKey =process.env.DICTIONARY_API_KEY;
  const searchQuery = 'fish';
  const response = await axios.get(`${url}${searchQuery}?key=${apiKey}`);
  // console.log("hello", response.data[0].hwi.hw);
  return new Response(response.data[0].hwi.hw);
}