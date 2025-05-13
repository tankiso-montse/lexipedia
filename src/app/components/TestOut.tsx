import { getWordDefinition, getWordExample } from '@/services/dictionaryService'
import React from 'react'

async function TestOut() {
  const [wordDefinition, wordExample] = await Promise.all([getWordDefinition(), getWordExample()])

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <h1>{wordDefinition?.word}</h1>
      <span>{wordDefinition?.partOfSpeech}</span>
      <h3>{wordDefinition?.definition}</h3>
      <p>{wordExample?.example}</p>
    </div>
    </>
  )
}

export default TestOut