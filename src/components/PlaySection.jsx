import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const PlaySection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const eyeCenterX = window.innerWidth / 2;
      const eyeCenterY = window.innerHeight / 2;
      
      // Calculate the distance from the center of the eye
      const deltaX = mouseX - eyeCenterX;
      const deltaY = mouseY - eyeCenterY;
      
      // Normalize the distance
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = 40; // Max distance the retina can move
      
      const moveX = (deltaX / distance) * Math.min(distance, maxDistance);
      const moveY = (deltaY / distance) * Math.min(distance, maxDistance);
      
      setPosition({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div data-section data-scroll data-speed-scroll="-0.3" className='relative bg-zinc-200 my-36 h-full w-full'>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mx-auto bg-black w-fit h-[80vh] relative"
      >
        <img 
          src="https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149177090.jpg?t=st=1721042321~exp=1721045921~hmac=dc0c4c33ea1d004b7df731fd8cf4872a850fae5e0481ff59871f2d17e550c9c9&w=900" 
          className='bg-cover h-full w-full opacity-50' 
          alt="GameSection" 
        />
        <div className="flex absolute top-[20%] left-[20%] justify-center gap-10 items-center">
          <div className="leftEye bg-slate-200 flex items-center justify-center rounded-full w-[13rem] h-[13rem]">
            <div className="flex justify-center w-32 h-32 rounded-full bg-black relative">
              <div 
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`
                }}
                className="innerRitna bg-white w-6 h-6 rounded-full absolute"
              ></div>
              <span className='text-white font-Candara absolute bottom-16 text-xl uppercase'>play</span>
            </div>
          </div>
          <div className="rightEye bg-slate-200 flex items-center justify-center rounded-full w-[13rem] h-[13rem]">
            <div className="flex justify-center w-32 h-32 rounded-full bg-black relative">
              <div 
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`
                }}
                className="innerRitna  bg-white w-6 h-6 rounded-full absolute"
              ></div>
              <span className='text-white font-Candara absolute bottom-16 text-xl uppercase'>play</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlaySection;
