import { Form, redirect, useActionData } from 'react-router-dom'
import { motion } from "framer-motion"


export default function Contact() {
  const data = useActionData();
  return (
    <motion.div initial={{x:'-100vh'}} animate={{x:0}} className=' text-white' >
        <h3 className='text-3xl font-bold'>contact Us</h3>
        <Form method="post" action='/helplayout/contact' className='flex flex-col w-[300px]'>
            <label htmlFor="" className='flex-col flex'>
                <span>Your Email</span>
                <input className='text-black' type="email"  name='email' required />
            </label>
            <label htmlFor="" className='flex flex-col'>
                <span>Your Message:</span>
                <textarea className='text-black' name="message" id="" ></textarea>
            </label>
            <button className='middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true" mt-2'>Submit</button>

      {/* {`${data && data.error} && <p>${data.error}<p/>`} */}

      {data && data.error }
        </Form>

      
    </motion.div>
  )
}

export const contactAction = async ({ request }) => {
  // console.log(request)

  const data = await request.formData();

  const submission ={
    email: data.get('email'),
    message: data.get('message')
  }
  console.log(submission)

  if(submission.message.length < 10) {
    return {error: 'Message must be over 10 chars long'}
  }

  return redirect('/')
} 