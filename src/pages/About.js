import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from "framer-motion"

export default function About() {
    const [user , setUser] = useState('shahid')
      if(!user){
        return  <Navigate to='/'  replace={true}/>
      }
    
  return (
    <div className='about text-white w-[90%] mx-auto'>
        <motion.h2 initial={{x:'-100vh'}} animate={{x:0,}} transition={{type:"spring", stiffness:200, duration:0.5 }} whileHover={{scale:1.1, originX:0,}}  className='text-4xl font-bold'>About us Page</motion.h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore rerum iusto explicabo ipsam quod aliquid temporibus vitae sunt tempore dolor quae cum deserunt molestias doloribus minus, hic totam. Qui.

        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore rerum iusto explicabo ipsam quod aliquid temporibus vitae sunt tempore dolor quae cum deserunt molestias doloribus minus, hic totam. Qui.

        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore rerum iusto explicabo ipsam quod aliquid temporibus vitae sunt tempore dolor quae cum deserunt molestias doloribus minus, hic totam. Qui.

        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore rerum iusto explicabo ipsam quod aliquid temporibus vitae sunt tempore dolor quae cum deserunt molestias doloribus minus, hic totam. Qui.

        </p>

        <button onClick={() => setUser(null)} className='bg-orange-700 p-3 rounded-lg active:bg-black-500'>Logout</button>
      
    </div>
  )
}
