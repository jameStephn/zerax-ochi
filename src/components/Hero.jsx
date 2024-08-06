import { motion } from 'framer-motion'
import React from 'react'

const Hero = () => {
  
  return (
    <div data-section  className=''>
      <div className="heading flex flex-col my-28 mx-16  justify-start">

      <motion.span
       initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 1.2
      }}
      className='uppercase md:text-6xl text-4xl lg:text-8xl font-Zera    font-extrabold '>We Create</motion.span>
      <div className="flex items-center">

        <motion.div 
        initial={
          {
            width:0 ,
          
          }
        }
        animate={
          {
            width: "7vw",
       
            x: 0
          }
        }
        transition={
          {
            duration: .8,
            delay: 0.5,
            ease: "easeInOut"
            }
            }

        className="w-20 h-16 rounded-md bg-red-600"></motion.div>
      <motion.span
      initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 1.2
      }}
      className='uppercase md:text-6xl text-4xl lg:text-8xl font-Zera tracking-tighter font-bold'>
        Eye-Opening</motion.span>
      </div>
      <motion.span
       initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 1.2
      }}
      className='uppercase md:text-6xl text-4xl lg:text-8xl font-Zera tracking-tighter font-bold'>Presentations</motion.span>

      </div>

      <hr className='bg-zinc-400 h-[2px] text-xl ' />
      <div className="flex justify-between px-10 font-Neue_Montreal text-slate-600 py-3 ">
        <span>For public and private companies </span>
        <span>
        From the first pitch to <b>IPO</b></span>
        <div className='border-2 border-slate-600 rounded-full py-2 mb-24 px-5 -tracking-tighter transition-all hover:duration-150 delay-75 hover:ease-in-out hover:bg-black hover:text-white'><button>Start the Project</button></div>
      </div>
    </div>
  )
}

export default Hero