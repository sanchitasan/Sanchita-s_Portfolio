"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative overflow-clip md:pt-40 pt-28"
      style={{
        background:
          "linear-gradient(to bottom, #000, #1B3A5B 25%, #2A6A8D 50%, #4DA8E0 70%, #5A4FBF 90%)",
      }}
    >
      <div className="absolute rounded-[50%] lg:w-[3000px] md:w-[2000px] w-[1300px] h-[1300px] lg:top-[700px] md:top-[650px] top-[450px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_40%,#000)]"></div>
      
      <div className="relative">
        <div className="font-bold text-center font-serif">
          <h1 className="text-[#AEEEEE] md:text-8xl text-5xl">Hi, I am</h1>
          <h1 className="lg:text-7xl md:text-6xl text-3xl pt-5 white">
            Sanchita Priyadarshinee
          </h1>
        </div>

        <div className="text-center md:text-xl pt-10 max-w-[1300px] font-montserrat mx-auto text-[#D0E1F9]">
          I am a Full-Stack Web Developer passionate about building user-friendly interfaces and integrating advanced technologies. With expertise in React.js, Next.js, and Node.js.
        </div>

        {/* Profile Picture with Scroll Animation */}
        <motion.div
          className="flex justify-center items-center md:mt-10"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} // Animates every time it comes into view
        >
          <motion.img
            className="flex justify-center lg:w-[400px] md:w-[300px] sm:w-[250px] w-[200px]"
            src="/pixelcut-export.png"
            alt="Profile"
            whileHover={{ scale: 1.05}} // Small hover effect for interactivity
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
