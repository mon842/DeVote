import React from 'react'
import Paragraph from '../Ui/Paragraph'

const Card = ({text,title}) => {
    return (
        <div className='bg-gray-800 p-5 rounded-lg'>
            <div className='flex gap-2'>
                <img className='h-6 w-6' src='https://surrealdb.com/static/img/home/tick-a3e79715894a5e7d6793a1f38a424c44.svg' alt='..' />
                <p className='text-white font-bold text-base'>{title}</p>
            </div>
            <Paragraph text={text}/>
        </div>
    )
}

export default Card