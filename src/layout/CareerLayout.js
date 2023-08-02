import React from 'react'
import { Outlet } from 'react-router-dom'
import { motion } from "framer-motion"

export default function CareerLayout() {
  return (
    <div>
        <motion.h2 animate={{fontSize:'35px'}} className=' font-bold text-white'>Careers </motion.h2>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <Outlet/>
    </div>
  )
}
