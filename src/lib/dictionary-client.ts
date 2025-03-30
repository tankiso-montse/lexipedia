import { searchedWord } from "@/app/types/apiTypes";

export const getSearchedWord = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_HOSTNAME + `/api/lookup`)
  const data = await response.json();
  if (data) {
    const headWord = data[0].hwi.hw.replace(/[^a-zA-Z]/g, "");
    const searchedTermData: searchedWord = {
      word: headWord,
      phonetics: {
        text: data[0].hwi.prs[0].mw || "",
        audio: data[0].hwi.prs[0].audio || "",
      },
      meanings: [
        {
          partOfSpeech: data[0].fl,
          definitions: [ {
            definition: data[0].shortdef[0],
          }
          ]
        }
      ]
    }

    return searchedTermData;
  }

  return data;
}