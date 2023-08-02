
import { NavLink, Outlet } from 'react-router-dom'
import { motion } from "framer-motion"


export default function HelpLayout() {
  return (
    <div className='text-white '>
        <h2 className=' text-4xl font-bold'>Website help</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsum!</p>

        <motion.nav initial={{x:'-100vh'}}  animate={{x:0}} transition={{ stiffness:120, type:'spring'}} className='help-btn my-4 space-x-3 flex justify-center'>
            <NavLink id='' to="faq" className='bg-transparent border border-white p-3 rounded-lg'>View the FAQ</NavLink>
            <NavLink id='' to="contact" className='bg-transparent border border-white p-3 rounded-lg '> Contact Us</NavLink>
        </motion.nav>
        
        <Outlet/>
    </div>
  )
}
