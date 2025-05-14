import { getPronounciation, getWordAudio, getWordDefinition, getWordExample } from '@/services/dictionaryService'
import React from 'react'

async function TestOut() {
  const [wordDefinition, wordExample, wordAudio, wordPronounciation] = await Promise.all([getWordDefinition(), getWordExample(), getWordAudio(), getPronounciation()])

  return (
    <>
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1>{wordDefinition?.word}</h1>
      <h3>{wordPronounciation?.pronounciation}</h3>
      <span>{wordDefinition?.partOfSpeech}</span>
      <h3>{wordDefinition?.definition}</h3>
      <p>{wordExample?.example}</p>
      <audio controls autoPlay>
        <source src={wordAudio?.audio} />
      </audio>
    </div>
    </>
  )
}

export default TestOut