"use client"
import React, { useState } from 'react';

const About = () => {
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  const handleMouseEnter = (box: string) => {
    setHoveredBox(box);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <div
      id="about"
      className="text-white p-10 pb-16"
      style={{
        background: "linear-gradient(to bottom, #000 10%, #1B3A5B 75%, #2A6A8D)",
      }}
    >
      <h1 className="md:mb-20 mb-5 lg:text-7xl md:text-6xl text-3xl text-center font-serif font-extrabold text-cyan-200">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row gap-5 justify-center">
        {/* Education Box */}
        <div
          className="flex-1 p-4 bg-gradient-to-l from-black via-[#132b44] to-[#2A6A8D] rounded-lg shadow-lg animate-gradient-move bg-[length:200%_200%] relative"
          onMouseEnter={() => handleMouseEnter('education')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-5xl">📚</span>
          <h3 className="text-lg font-bold mt-2">Education</h3>
          <p className="text-sm mt-1">
            I hold a degree in Electronics and Communication and I am focusing on technologies like React, Next.js, and Tailwind CSS.
          </p>
          {hoveredBox === 'education' && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center text-center rounded-lg">
              <p className="text-white">
                I graduated with a degree in Electronics and Communication Engineering. My academic journey has equipped me with a solid foundation in technology and problem-solving skills. I am currently enhancing my knowledge in modern web development frameworks, particularly React and Next.js, to build dynamic and responsive applications.
              </p>
            </div>
          )}
        </div>

        {/* Problem-Solving Box */}
        <div
          className="flex-1 p-4 rounded-lg shadow-lg max-w-[550px] bg-gradient-to-r from-black via-[#132b44] to-[#2A6A8D] animate-gradient-move bg-[length:200%_200%] relative"
          onMouseEnter={() => handleMouseEnter('problemSolving')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-5xl">🧠</span>
          <h3 className="text-lg font-bold mt-2">Problem-Solving</h3>
          <p className="text-sm mt-1">
            I approach challenges with a logical and systematic mindset.
          </p>
          {hoveredBox === 'problemSolving' && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center text-center p-4 rounded-lg">
              <p className="text-white">
                My problem-solving skills are rooted in a logical and analytical approach. I enjoy breaking down complex problems into manageable parts and finding efficient solutions. Whether it&apos;s debugging code or optimizing processes, I thrive on challenges that require critical thinking and creativity.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
        {/* Experience Box */}
        <div
          className="flex-1 p-4 rounded-lg shadow-lg bg-gradient-to-r from-black via-[#132b44] to-[#2A6A8D] animate-gradient-move bg-[length:200%_200%] relative"
          onMouseEnter={() => handleMouseEnter('experience')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-5xl">💼</span>
          <h3 className="text-lg font-bold mt-2">Experience</h3>
          <p className="text-sm mt-1">
            I have a diverse portfolio of projects.
          </p>
          {hoveredBox === 'experience' && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center text-center p-4 rounded-lg">
              <p className="text-white">
                My professional experience spans various roles where I have successfully managed projects and collaborated with teams. I have worked on web applications that enhance user experience and streamline processes, utilizing my skills in React and Next.js to deliver high-quality solutions.
              </p>
            </div>
          )}
        </div>

        {/* Technical Skills Box */}
        <div
          className="flex-1 p-4 rounded-lg shadow-lg bg-gradient-to-l from-black via-[#132b44] to-[#2A6A8D] animate-gradient-move bg-[length:200%_200%] relative"
          onMouseEnter={() => handleMouseEnter('technicalSkills')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-5xl">🛠️</span>
          <h3 className="text-lg font-bold mt-2">Technical Skills</h3>
          <p className="text-sm mt-1">
            As a Fullstack Web Developer, I specialize in React JS, Next.js, and Tailwind CSS.
          </p>
          {hoveredBox === 'technicalSkills' && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center text-center rounded-lg">
              <p className="text-white">
                I possess a strong skill set in full-stack web development, with a focus on modern JavaScript frameworks. My expertise includes building responsive user interfaces with React, server-side rendering with Next.js, and styling with Tailwind CSS. I am always eager to learn new technologies and improve my craft.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;