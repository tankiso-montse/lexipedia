import React from 'react'

type infoBlockProps = {
  heading: string
  content: string
}

function InfoBlock({heading, content}: infoBlockProps) {
  return (
    <div className="mt-4 flex flex-col gap-1">
      <h4 className="text-xl">{heading}</h4>
      <ol>
        <li>{content}</li>
      </ol>
    </div>

  )
}

export default InfoBlock