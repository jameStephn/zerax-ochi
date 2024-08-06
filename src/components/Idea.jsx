import { motion } from 'framer-motion'
import React from 'react'

const Idea = () => {
  return (
    <div data-section className='w-full  bg-[#b8ce57]'>
      <motion.div 
      initial={{
        opacity: 0,
        x: 0
      }}
     whileInView={
      {
        opacity:1,
        x: 50
      }
     }
      transition={{
        duration: 1
      }}
      className="heading px-10 py-20">
        <span className='text-6xl font-Candara'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain com­plex ideas, and hire great peo­ple.</span>
      </motion.div>
        <hr className='border-slate-400'/>
        <div className="grid mx-10 py-5 grid-cols-2 ">
          <motion.div
          initial={
            {
              opacity: 0,
              x: 0
            }
          }
          whileInView={
            {
              opacity:1,
              x: 100
            }
          }
          transition={{
            duration: 1
          }}
          
          className="left">
          What you can expect:
          </motion.div>
          <motion.div
          initial={
            {
              opacity: 0,
              x: 20
            }
          }
          whileInView={
            {
              opacity:1,
              x: -50
            }
          }
          transition={{
            duration: 1,
            delay: 0.5
          }}
          className="right grid py-5 space-y-10 grid-cols-2 ">
          <span className="">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</span>
          <span className="items-end flex mx-16">Lorem </span>
          <span className="">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</span>
          <div className="text-xl font-Zera">{["Instagram", "Behance", "Facebook", "LinkIdin"].map((item,index)=>(
            <a href="#" className=" flex flex-col mx-16 underline " key={index}>{item}</a>
          ))}</div>
          </motion.div>
        </div>
        <hr className='border-slate-400 mt-16' />
        
    </div>
  )
}

export default Idea