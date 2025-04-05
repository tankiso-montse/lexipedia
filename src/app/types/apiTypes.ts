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