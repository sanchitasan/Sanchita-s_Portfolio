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
      <div className="flex flex-col md:flex-row gap-5 justify-center relative">
        {/* Education Box */}
        <div
          className={`flex-1 p-4 bg-gradient-to-l from-black via-[#132b44] to-[#2A6A8D] rounded-lg shadow-lg transition-all duration-300 relative ${hoveredBox === 'education' ? 'absolute left-0 right-0 z-10' : ''}`}
          onMouseEnter={() => handleMouseEnter('education')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-5xl">📚</span>
          <h3 className="text-lg font-bold mt-2">Education</h3>
          <p className=" md:text-sm text-xs mt-1">
            Pursuing a B.Tech in Electronics and Communication Engineering, with an emphasis on technologies like React, Next.js, and Tailwind CSS.
          </p>
          {hoveredBox === 'education' && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center p-1 text-center rounded-lg">
            <p className="text-white md:text-sm text-xs">
                Skilled in React, Next.js, Tailwind CSS, and backend technologies like Node.js and MySQL. Enthusiastic about AI, ML, and circuit design, with hands-on experience in projects. A dedicated learner, and tech coordinator, always striving for professional growth and impactful contributions.
              </p>
            </div>
          )}
        </div>

        {/* Problem-Solving Box */}
        <div
          className={`flex-1 p-4 rounded-lg shadow-lg max-w-[550px] bg-gradient-to-r from-black via-[#132b44] to-[#2A6A8D] transition-all duration-300 relative ${hoveredBox === 'problemSolving' ? 'absolute left-0 right-0 z-10' : ''}`}
          onMouseEnter={() => handleMouseEnter('problemSolving')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-5xl">🧠</span>
          <h3 className="text-lg font-bold mt-2">Problem-Solving</h3>
          <p className="md:text-sm text-xs mt-1">
            Approaching challenges with a structured and analytical mindset.
          </p>
          {hoveredBox === 'problemSolving' && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center text-center p-1 rounded-lg">
            <p className="text-white md:text-sm text-xs">
                Strong problem-solving skills with a logical and analytical approach to tackling challenges. Experienced in optimizing code, and developing efficient solutions in web development. Enjoys competitive programming and algorithmic problem-solving to enhance technical expertise.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center relative">
        {/* Experience Box */}
        <div
          className={`flex-1 p-4 rounded-lg shadow-lg bg-gradient-to-r from-black via-[#132b44] to-[#2A6A8D] transition-all duration-300 relative ${hoveredBox === 'experience' ? 'absolute left-0 right-0 z-10' : ''}`}
          onMouseEnter={() => handleMouseEnter('experience')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-5xl">💼</span>
          <h3 className="text-lg font-bold mt-2">Experience</h3>
          <p className="md:text-sm text-xs mt-1">
            Experienced in building projects, leading tech teams, implementing features, and achieving recognition in hackathons.
          </p>
          {hoveredBox === 'experience' && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center text-center p-1 rounded-lg">
              <p className="text-white md:text-sm text-xs">
                Developed and optimized web applications implementing authentication and dashboard features with Node.js, Express, and MySQL. Led the tech team for HackOdisha 4.0 and contributed as a tech coordinator for Cosmo.
              </p>
            </div>
          )}
        </div>

        {/* Technical Skills Box */}
        <div
          className={`flex-1 p-4 rounded-lg shadow-lg bg-gradient-to-l from-black via-[#132b44] to-[#2A6A8D] transition-all duration-300 relative ${hoveredBox === 'technicalSkills' ? 'absolute left-0 right-0 z-10' : ''}`}
          onMouseEnter={() => handleMouseEnter('technicalSkills')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-5xl">🛠️</span>
          <h3 className="text-lg font-bold mt-2">Technical Skills</h3>
          <p className="md:text-sm text-xs mt-1">
            Proficient in web development, backend, problem-solving, embedded systems, AI, and version control, with experience in various development tools.
          </p>
          {hoveredBox === 'technicalSkills' && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center text-center p-1 rounded-lg">
            <p className="text-white md:text-sm text-xs">
                Skilled in web development, backend technologies, problem-solving, and algorithms, with experience in embedded systems, circuit design, AI, and machine learning fundamentals. Proficient in version control using Git and familiar with tools like Cloudinary, Multisim, and Postman.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;