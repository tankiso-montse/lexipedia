import { getSearchedWord} from '@/services/dictionaryService'
import React from 'react'

async function TestOut() {
  const searchedTerm = await getSearchedWord()
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1>{searchedTerm.wordDefinition?.word}</h1>
      <h3>{searchedTerm.wordPronounciation?.pronounciation}</h3>
      <span>{searchedTerm.wordDefinition?.partOfSpeech}</span>
      <h3>{searchedTerm.wordDefinition?.definition}</h3>
      <p>{searchedTerm.wordExample?.example}</p>
      <audio controls autoPlay>
        <source src={searchedTerm.wordAudio?.audio} />
      </audio>
    </div>
    </>
  )
}

export default TestOut