import { wordDefinition, wordExample } from "@/app/types/apiTypes";

export async function getWordDefinition() {
  const response = await fetch(process.env.NEXT_PUBLIC_HOSTNAME + `/api/search/definitions`)
  try {
    const data = await response.json();
    if (data.length >= 1 ) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].text) {
          const wordDefinition: wordDefinition = {
            word: data[i].word,
            partOfSpeech: data[i].partOfSpeech,
            definition: data[i].text,
          }
          return wordDefinition;
        }
      }
    }
} catch (error) {
    console.error('Error fetching word definition data:', error);
  }
}

export async function getWordExample() {
  const response = await fetch(process.env.NEXT_PUBLIC_HOSTNAME + `/api/search/example`)
  try {
    const data = await response.json();
    const wordExample: wordExample = {
      example: data.text,
    }
      
    return wordExample;
  } catch (error) {
    console.error('Error fetching word example data:', error);
  }
}
