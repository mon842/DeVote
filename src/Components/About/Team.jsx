import React from 'react'
import {data} from '../About/data'
import Card2 from './Card2'
import PurpleHead from '../Ui/PurpleHead'
const Team = ({}) => {
    
    
  return (
    
    <div className='px-12 py-8 md:px-20 mb-5'>
        <div className='mx-auto text-center text-white font-bold text-3xl pb-[30px] pt-[10px]'>
            <p className='welcome-message'>Team <PurpleHead text={'Members'}/></p>
        </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[50px] justify-items-center md:max-w-4xl max-w-lg'>
    {data.map(data => (
            <Card2 key={data.id} data={data} />
          ))}  
    </div>

</div>
  )
}

export default Team