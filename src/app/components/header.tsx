import React from 'react'
import { getSearchedWord } from '@/lib/dictionary-client'
import { searchedWord } from '../types/apiTypes'
// import { searchedWord } from '../types/apiTypes'

async function Header() {
  // const word: searchedWord= await getSearchedWord()
 
  return (
    <div className='p-4 bg-gray-800 font-averia'>
      <h1>Header</h1>
      {/* <div>
        <h1>{word.word}</h1>
        <h3>{word.phonetics?.text || ''}</h3>
        <p>{word?.meanings?.[0].definitions?.[0].definition || ''}</p>
      </div> */}
    </div>
  )
}

export default Header