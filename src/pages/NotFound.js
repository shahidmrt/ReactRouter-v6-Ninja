import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='text-white '>
        <h3 className='text-2xl font-bold'>Page not Found ! </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis in a nobis ad consequuntur perferendis velit nisi sed, suscipit quasi earum maxime quos officia, sit accusamus reiciendis ducimus saepe? Maxime velit accusantium beatae doloribus, odit ullam similique sequi tempora.</p>

        <p>Go to The <Link className='border-b-2 border-orange-700' to='/'>Home Page </Link> .</p>
      
    </div>
  )
}
