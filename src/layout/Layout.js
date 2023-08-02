import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumbs from '../component.js/BreadCrumbs'
import { motion } from "framer-motion"


export default function Layout() {
  return (
    <>
     <header >
     {/* transition={{delay:1.2,type:'spring', type:'tween', stiffness:120}} */}
      <motion.nav initial={{y:-200}} animate={{y:-5}} transition={{delay:0.5,}} className='flex justify-between flex-row font-bold px-7 py-4 bg-gray-400'>
        <h1 className='text-3xl border-b-2 border-orange-500'> RouterDom</h1>
        <div className='py-2 space-x-2'>
        <NavLink className='bg-orange-700 p-3 rounded-lg ' to="/">Home</NavLink>
        <NavLink className='bg-orange-700 p-3 rounded-lg ' to='about'>About</NavLink>
        <NavLink className='bg-orange-700 p-3 rounded-lg ' to='helplayout'>help</NavLink>
        <NavLink className='bg-orange-700 p-3 rounded-lg ' to='careerlayout'>Career</NavLink>
        </div>
      </motion.nav>
      <BreadCrumbs/>
    </header>
    <main className='max-w-[1200px] my-10 mx-auto  space-y-3'>
        <Outlet/>
    </main>
    </>
  )
}
