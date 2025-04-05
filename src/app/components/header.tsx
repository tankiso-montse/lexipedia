import React from 'react'
import { getSearchedWord } from '@/lib/dictionary-client'

async function Header() {
  const word =  await getSearchedWord()
 
  return (
    <div className='p-4 bg-gray-800 font-averia'>
      <h1>Header</h1>
      <div>
        {word?.word ? (
          <>
            <h1>{word.word}</h1>
            <h3>{word.phonetics?.text || ''}</h3>
            <p>{word?.meanings?.[0].definitions?.[0].definition || ''}</p>
          </>
        ) : (
          <>
            <h1>{word?.wordNotFound?.title}</h1>
            <p>{word?.wordNotFound?.message}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Header