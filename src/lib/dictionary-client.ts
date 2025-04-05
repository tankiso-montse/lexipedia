import { searchedWord } from "@/app/types/apiTypes";
import Error from "next/error";

export const getSearchedWord = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_HOSTNAME + `/api/search`);
    const data = await response.json();
    if (data) {
      const searchedTermData: searchedWord = {
        word: data[0].word,
        phonetics: {
          text: data[0].phonetics[0]?.text,
          audio: data[0].phonetics[0]?.audio,
        },
        meanings: [
          {
            partOfSpeech: data[0].meanings[0].partOfSpeech,
            definitions: [
              {
                definition: data[0].meanings[0].definitions[0].definition,
                example: data[0].meanings[0].definitions[0].example, 
                synonyms: data[0].synonyms[0],
                antonyms: data[0].antonyms,
              },
            ],
          },
        ],
      };
  
      return searchedTermData;
    } 
    return 'Word not found';
  } catch {
    console.error('Error fetching word data:', Error);
  }
};
