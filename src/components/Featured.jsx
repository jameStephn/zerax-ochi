import React, { useState } from "react";
import "../App.css";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";

const Featured = () => {
  const [Card1, setCard1] = useState(false);
  const [Card2, setCard2] = useState(false);

  return (
    <div
      data-section
      data-scroll
      data-scroll-speed=".8"
      className="-z-20 bg-white h-full"
    >
      <div className="Title bg-zinc-200 pb-20">
        <div className="mx-10">
          <div className="flex justify-start pt-16 pb-5 px-5 items-center">
            <h1 className="text-7xl font-Zera text-white font-light">
              Features Projects
            </h1>
          </div>
        </div>
        <hr className="border-slate-400" />

        <div className="grid mx-11 pt-10 grid-cols-2 gap-7 relative">
          <div className="absolute left-[45%] top-[20rem] flex">
            <motion.span
              initial={{ y: "100%" }}
              animate={Card1 ? { y: "0" } : { y: "100%" }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className={`text-5xl text-yellow-500 z-10 ${Card2 ? "flex" : "hidden"}`}
            >
              VISE
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={Card2 ? { y: "0" } : { y: "100%" }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className={`text-5xl text-yellow-500 z-10 absolute left-5 ${Card1 ? "flex" : "hidden"}`}
            >
              FYDE
            </motion.span>
          </div>
          <div className="leftCard h-screen w-full">
            <div className="CardHeading flex justify-start gap-3 items-center">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <h3 className="text-xl uppercase py-5">Fyde</h3>
            </div>
            <div
              className="body"
              onMouseEnter={() => setCard1(true)}
              onMouseLeave={() => setCard1(false)}
            >
              <img
                src="https://img.freepik.com/free-vector/marketing-business-landing-page-template_23-2148786667.jpg?uid=R32147177&ga=GA1.2.1218765945.1721042138&semt=ais_user"
                className="w-full hover:scale-95 transition-transform duration-300 cursor-pointer rounded-lg h-full"
                alt="img"
              />
            </div>
          </div>
          <div className="rightCard h-screen w-full">
            <div className="CardHeading flex justify-start gap-3 items-center">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <h3 className="text-xl uppercase py-5">Vise</h3>
            </div>
            <div
              className="body"
              onMouseEnter={() => setCard2(true)}
              onMouseLeave={() => setCard2(false)}
            >
              <img
                src="https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149053656.jpg?uid=R32147177&ga=GA1.2.1218765945.1721042138&semt=ais_user"
                className="w-full hover:scale-95 transition-transform duration-300 cursor-pointer rounded-lg h-full"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="custom-button px-5 group z-10 flex items-center justify-center bg-zinc-900 transition-all hover:shadow-inherit rounded-full">
            <button className="text-2xl p-5 text-white">
              View All Case Studies
            </button>
            <span className="group-hover:w-10 group-hover:h-10 rounded-full">
              <CiLocationArrow1 className="text-zinc-900 duration-75 group-hover:ease-linear group-hover:text-white text-3xl" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
