"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cusror from "../assets/star.jpeg";

const Hero = () => {
  return (
    // <div className="home">

    //   <div className="flex flex-col items-center justify-center overflow-clip bg-[linear-gradient(to_bottom,#000, #2B1942_35%, #8F5C55_60%, #DBAF6E_80%)">
    //     <h1 className="lg:my-16 md:my-16 my-8 text-center text-4xl  font-extrabold md:text-5xl lg:text-6xl">
    //       <div className="font-serif">Hi, I'm <br />Sanchita Priyadarshinee</div>
    //       <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-300 from-green-400 inline-block text-lg md:text-xl text-center">
    //         I am a Full-Stack Web Developer focused on creating user-friendly interfaces and incorporating cutting-edge technologies into projects.
    //       </span>
    //     </h1>

    //     <figure className="md:mt-10 shadow-sm  shadow-purple max-w-sm px-3 md:mx-0 md:my-0 mx-16">
    // <img
    //   className="py-5 shadow-2xl shadow-black-300"
    //   src="/about.jpeg"
    //   alt="Profile"
    // />
    //     </figure>
    //   </div>
    // </div>
    <div id="home"
      className="relative overflow-clip pt-32"
      style={{
        background:
          "linear-gradient(to bottom, #000, #1B3A5B 25%, #2A6A8D 50%, #4DA8E0 70%, #5A4FBF 90%)",
      }}
    >
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_40%,#0A1D2D)]"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center font-serif">
          <h1 className=" text-cyan-200">Hi, I am</h1>
          <h1 className="text-7xl pt-5">Sanchita Priyadarshinee</h1>
        </div>
        <motion.div className="absolute top-[90px]" drag>
          <img
            className=" "
            src="/ai-generated-gold-star-on-transparent-background-png.webp"
            alt="Profile"
            height="200"
            width="300"
          />
        </motion.div>

        <div className=" text-center text-xl pt-5 max-w-[700px] font-montserrat mx-auto">
          I am a Full-Stack Web Developer focused on creating user-friendly
          interfaces and incorporating cutting-edge technologies into projects.
        </div>

        <div className="flex justify-center items-center ">
          <img
            className=" "
            src="/pp.png"
            alt="Profile"
            height="200"
            width="300"
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;
