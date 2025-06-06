export type wordDefinition = {
  word: string;
  partOfSpeech: string;
  definition: string;
};

export type wordAudio = {
  audio: string;
};

export type wordPronunciation = {
  pronunciation: string;
};

export type wordExample = {
  example: string;
};

export type relatedWords = {
  antonyms: string[];
  synonyms: string[];
};

export type searchedWord = {
  wordDefinition?: wordDefinition;
  wordAudio?: wordAudio;
  wordPronunciation?: wordPronunciation;
  wordExample?: wordExample;
  relatedWords?: relatedWords;
  wordNotFound?: {
    title: string;
    message: string;
    resolution?: string;
  };
};

export type wordOfTheDay = {
  definitions: wordDefinition[];
  examples: wordExample[];
  audio?: wordAudio;
  note: string;
};
