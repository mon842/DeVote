import React from 'react'

const Card2 = ({data}) => {
  return (

<div className='overflow-hidden bg-gray-800 rounded-xl flex flex-col'>
    <div className=' flex w-full overflow-hidden '>
    <img className='w-full hover:scale-110 transition duration-500' src={data.image} />
    </div>
    <div className='flex p-6 text-gray-300 items-center justify-center'>
    {data.content} 
    </div>
</div>
  )
}

export default Card2