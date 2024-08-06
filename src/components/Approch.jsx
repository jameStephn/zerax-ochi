import { motion } from 'framer-motion'
import React from 'react'
const Approch = () => {
  return (
    <div data-section className='bg-[#b8ce57] h-[80vh]  w-full py-10 '>
      <div className="flex justify-between px-10">

      <motion.div
      initial={
        {
          opacity:0,
          x:0
        }
      }
      whileInView={
        {
          opacity:1,
          x: 50
        }
      }
    
      transition={{
        duration: 1,
      }}
      
      className="text-4xl">
        <span>
        Our approch: 
        </span>
        <div className="flex text-xl text-white justify-start py-2  my-5 rounded-full">
          <motion.div
          initial={
            {
              opacity:1
            }
          }
          whileHover={
            {
              scale:1.1
            }
          }
          className="p-3 flex gap-5 items-center rounded-full bg-black">

          <button
          
          
          >Read More</button>
          <motion.div
          
         

          className="h-3 w-3 rounded-full bg-white"></motion.div>
          </motion.div>
        </div>

      </motion.div>
      <motion.div 
      initial={{
        opacity:0,
        x:0
      }}
      whileInView={{
        opacity:1,
        x: -50
      }}
      transition={{
        duration: 1,
      }}
      className="shadow-lg "> 
        <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
      </motion.div>
      </div>
    </div>
  )
}

export default Approch