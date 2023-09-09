import React from 'react'

const PurpleHead = ({text}) => {
  return (
    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600  via-[#c905ff] to-purple-500">{text}</span>
  )
}

export default PurpleHead