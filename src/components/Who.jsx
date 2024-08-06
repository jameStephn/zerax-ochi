import { motion } from 'framer-motion'
import React from 'react'

const Who = () => {

  return (
    <div data-scroll data-section data-scroll-speed="-.1" className='w-full h-full py-5 rounded-xl bg-green-700'>
        <hr className='bg-zinc-400 my-5  ' />
      <div
     
      className="inline-flex items-center justify-center  pb-24  text-white  w-full  border-zinc-400 text-[20vh] font-bold tracking-tighter gap-2 uppercase h-28 "> 
       <div className="inline-block">

       <motion.h1  
     
       initial={{ opacity: 0, y: 0 }}
         transition={{ duration: 1 }}
         whileInView={
          {
            opacity:1,
            y: 50
          }
         }
         viewport={{
          amount: "all"
         }}
         
        
       > 
       We are Ochi.

       </motion.h1>
    
        </div>

       </div>
       
        <hr className='bg-red-400  my-5' />
      
      
    </div>
  )
}

export default Who