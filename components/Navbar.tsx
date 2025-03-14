"use client"
import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
        {/* <motion.div className="absolute mt-[200px] ml-20" drag>
          <img
            className=" "
            src="/Pasted Graphic.png"
            alt="Profile"
            height="200"
            width="200"
          />
        </motion.div> */}
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-black via-[#132b44] to-[#2A6A8D] shadow-lg">
      {/* Desktop Navbar */}
      <ul className="hidden md:flex justify-center text-center py-4">
        {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
          <li key={index} className="mx-6">
            <a
              className="text-gray-300 text-lg font-medium font-serif px-4 py-2 transition-all duration-300 hover:text-cyan-300 hover:scale-105"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-5 py-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          {isOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md py-8 flex flex-col items-center text-white space-y-6 text-xl shadow-lg animate-slideInDown">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-300 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
