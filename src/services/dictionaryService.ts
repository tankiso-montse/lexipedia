import {
  relatedWords,
  searchedWord,
  wordAudio,
  wordDefinition,
  wordExample,
  wordOfTheDay,
  wordPronunciation,
} from "@/app/types/apiTypes";

async function getWordDefinition() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOSTNAME + `/api/search/definitions`
  );
  try {
    const data = await response.json();
    if (data.length >= 1) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].text) {
          const wordDefinition: wordDefinition = {
            word: data[i].word,
            partOfSpeech: data[i].partOfSpeech,
            definition: data[i].text,
          };
          return wordDefinition;
        }
      }
    }
  } catch (error) {
    console.error("Error fetching word definition data:", error);
  }
}

async function getWordExample() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOSTNAME + `/api/search/example`
  );
  try {
    const data = await response.json();
    const wordExample: wordExample = {
      example: data.text,
    };
    return wordExample;
  } catch (error) {
    console.error("Error fetching word example data:", error);
  }
}

async function getWordAudio() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOSTNAME + `/api/search/audio`
  );
  try {
    const data = await response.json();
    if (data.length > 1) {
      const wordAudio: wordAudio = {
        audio: data[1].fileUrl,
      };
      return wordAudio;
    } else {
      const wordAudio: wordAudio = {
        audio: data[0].fileUrl,
      };
      return wordAudio;
    }
  } catch (error) {
    console.error("Error fetching word audio data:", error);
  }
}

async function getPronunciation() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOSTNAME + `/api/search/Pronunciations`
  );
  try {
    const data = await response.json();
    if (data.length > 0) {
      const wordPronunciation: wordPronunciation = {
        pronunciation: data[0].raw,
      };
      return wordPronunciation;
    }
  } catch (error) {
    console.error("Error fetching word Pronunciation data:", error);
  }
}

async function getRelatedWords() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOSTNAME + `/api/search/related-words`
  );
  try {
    const data = await response.json();
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].relationshipType === "synonym" ||
          data[i].relationshipType === "antonym"
        ) {
          const relatedWords: relatedWords = {
            antonyms: data[i].words,
            synonyms: data[i].words,
          };
          return relatedWords;
        }
      }
    }
    return { antonyms: [], synonyms: [] };
  } catch (error) {
    console.error("Error fetching related words data:", error);
  }
}

export async function getSearchedWord() {
  const [
    wordDefinition,
    wordExample,
    wordAudio,
    wordPronunciation,
    relatedWords,
  ] = await Promise.all([
    getWordDefinition(),
    getWordExample(),
    getWordAudio(),
    getPronunciation(),
    getRelatedWords(),
  ]);

  const searchedWord: searchedWord = {
    wordDefinition: wordDefinition,
    wordExample: wordExample,
    wordAudio: wordAudio,
    wordPronunciation: wordPronunciation,
    relatedWords: relatedWords,
    wordNotFound: {
      title: "Word not found",
      message: "Please try again with a different word.",
      resolution: "Check the spelling or try a different word.",
    },
  };
  return searchedWord;
}

export async function getWordOfTheDay() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_HOSTNAME + `/api/wordOfTheDay`
  );
  if (!response.ok) {
    throw new Error("Could not fetch word of the day from backend");
  }
  const data = await response.json();
  const wordOfTheDay: wordOfTheDay = {
    definitions: [
      {
        word: data.word,
        partOfSpeech: data.definitions[0].partOfSpeech,
        definition: data.definitions[0].text,
      },
    ],
    examples: [
      {
        example: data.examples[0].text,
      },
    ],
    note: data.note,
  };
  return wordOfTheDay;
}
