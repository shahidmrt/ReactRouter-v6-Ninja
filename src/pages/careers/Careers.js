import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { motion } from "framer-motion"

export default function Careers() {
  const careers =useLoaderData()
  return (
    <div className=' relative overflow-hidden '>
      {careers.map((career)=>(
        <motion.div initial={{opacity:0, x:"100vh"}} whileInView={{opacity:1, x:0,  }} transition={{duration:0.5, type:'spring', stiffness:120,}} whileHover={{scale:1.1, boxShadow: '0px 0px 10px #fff',  }} className='career border border-orange-900 w-[90%] mx-auto  my-2 bg-slate-800 p-2 rounded-lg' key={career.id}>
        <Link className=' py-4 border-b border-white' to={career.id.toString()} key={career.id}>
          <motion.p initial={{  color:'white',}} whileHover={{  color:'yellow',}}   className=''>{career.title}</motion.p>
          <p>Bassed in {career.location}</p>
           </Link>
        </motion.div>
      ))}
      
    </div>

  )
}

// Loader function

export const careersLoader = async () =>{
  const res =await fetch('http://localhost:4000/careers')

  if(!res.ok){
    throw Error(`"npx json-server --watch data/db.json --port 4000", plz first run this command and then and run program... the data is not fetch. `);
    
}

  return res.json()
}