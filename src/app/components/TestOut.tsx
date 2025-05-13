import { getWordDefinition } from '@/services/dictionaryService'
import React from 'react'

async function TestOut() {
  const wordDefinition = await getWordDefinition()

  return (
    <div>
      <h3>{wordDefinition?.definition}</h3>
      <span>{wordDefinition?.partOfSpeech}</span>
      <p>{wordDefinition?.word}</p>
    </div>
  )
}

export default TestOut