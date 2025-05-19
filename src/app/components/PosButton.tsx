import React from 'react'

type PosButtonProps = {
  partsOfSpeech: string
}

function PosButton({ partsOfSpeech }: PosButtonProps) {
  return (
    <button className='bg-primary-btn py-1 px-5 rounded-4xl hover:scale-110 duration-200 cursor-pointer font-semibold'>{partsOfSpeech}</button>
  )
}

export default PosButton