import { searchedWord } from "@/app/types/apiTypes";

export const getSearchedWord = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOSTNAME + `/api/search`
  );
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
          partOfSpeech: data.meanings[0].partOfSpeech,
          definitions: [
            {
              definition: data.meanings[0].definitions[0].definition,
              example: data.meanings[0].definitions[0].example, 
              synonyms: data.synonyms[0],
              antonyms: data.antonyms[0],
            },
          ],
        },
      ],
    };

    return searchedTermData;
  }

  return data;
};
