import React from 'react'
import PurpleHead from '../Ui/PurpleHead'
import Card from './Card'
import { reason ,title} from '../constants'

const About = () => {
  return (
    <div className='px-8 md:px-32 mb-5'>
        <p className='welcome-message'> Why De <PurpleHead text={'vote'}/> ?</p>
        <p className="my-6 text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis nostrum corporis mollitia quaerat! Modi ab enim error odio in sequi doloremque. Odio pariatur deleniti reprehenderit dolore. Aliquam, nam sed!</p>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Card title={title[0]} text={reason[0]}/>
          <Card title={title[1]}  text={reason[1]}/>
          <Card title={title[2]} text={reason[2]}/>
        </div>
    
    </div>
  )
}

export default About