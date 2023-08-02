import React from 'react'
import { motion } from "framer-motion"


export default function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:5,}} className='home text-white flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold'>Welcome To </h2>
       <h3 className='text-3xl font-bold'> Router Dom App </h3>
       <h3 className='text-3xl font-bold'> Home page </h3>
      
    </motion.div>
  )
}
