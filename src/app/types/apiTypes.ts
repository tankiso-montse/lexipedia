export type searchedWord = {
  word?: string;
  phonetics?: {
    text?: string;
    audio?: string;
  };
  meanings?: {
    partOfSpeech: string;
    definitions?: {
      definition: string;
      example?: string;
      synonyms?: string[];
      antonyms?: string[];
    }[];
  }[];
  wordNotFound?: {
    title: string;
    message: string;
    resolution?: string;
  };
}


export type wordDefinition = {
  word: string;
  partOfSpeech: string;
  definition: string;
}

export type wordAudio = {
  audio: string;
}

export type wordPronounciation = {
  pronounciation: string;
}

export type wordExample = {
  example: string;
}

export type relatedWords = {
  antonyms: string[];
  synonyms: string[];
}