// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <>
//       <div id="about">
//         <h1 className="md:mt-20 mt-8 text-2xl md:text-4xl text-center font-serif font-extrabold lg:text-6xl">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-pink-200">
//             About Me
//           </span>
//         </h1>
//         <div className="content text-justify justify-between text-base pt-5 mx-4 md:text-xl">
//           <h1>
//             I am{" "}
//             <b className="text-purple">Sanchita Priyadarshinee</b>, a student at
//             NIT Rourkela pursuing a B.Tech in{" "}
//             <b className="text-purple">
//               Electronics and Communication Engineering
//             </b>{" "}
//             with a major in front-end web development. With expertise in{" "}
//             <b className="text-purple">
//               HTML, CSS, JavaScript, React.js, and Tailwind CSS
//             </b>
//             , my area of expertise is developing user-friendly interfaces and
//             incorporating cutting-edge technologies into projects. With my
//             background in{" "}
//             <b className="text-purple">Python</b> and{" "}
//             <b className="text-purple">Scikit-learn</b>, I also have an
//             interest in{" "}
//             <b className="text-purple">AI and machine learning</b>. I am
//             well-versed in{" "}
//             <b className="text-purple">MySQL and MongoDB</b> database
//             administration. Distinguished by my{" "}
//             <b className="text-purple">leadership, strategic planning</b>, and{" "}
//             <b className="text-purple">organizational abilities</b>, I
//             guarantee effective project implementation while upholding a strict
//             time and resource management regimen. I am a badminton enthusiast
//             who values cooperation and physical conditioning.
//           </h1>
//         </div>
//       </div>

//       <div className="mt-28 rounded-2xl">
//         <div className="hover:scale-110 duration-500 p-6 bg-gradient-to-r from-black via-purple to-black">
//           <p className="lg:text-5xl md:text-4xl uppercase font-extrabold text-black text-center shadow-black shadow-md lg:my-10 md:my-10 mb-5 font-serif">
//             Skills
//           </p>
//           <div className="grid grid-cols-1 font-montserrat font-extrabold italic tracking-wider text-gray-950 shadow-md md:px-16 px-5 md:py-16 md:text-2xl lg:mx-32">
//             <ul>
//               <li>Languages: Python, C++, Java, JavaScript, TypeScript.</li>
//               <li className="lg:mt-5 md:mt-5">
//                 Version Control: Git, GitHub.
//               </li>
//               <li className="lg:mt-5 md:mt-5">
//                 Frontend Technologies: React.js, Next.js.
//               </li>
//               <li className="lg:mt-5 md:mt-5">Databases: SQL.</li>
//               <li className="lg:mt-5 md:mt-5 md:mb-0 mb:5">
//                 ML: CNN, ANN.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

const About = () => {
  return (
    <div id="about"
      className=" text-white p-10 pb-16 "
      style={{
        background:
          "linear-gradient(to bottom, #000 10%, #1B3A5B 75%, #2A6A8D)",
      }}
    >
      <h1 className="mb-20 text-2xl text-center font-serif font-extrabold md:text-4xl lg:text-7xl text-cyan-200">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row gap-5 justify-center ">
        {/* Left Column */}
        <div className="flex-1 p-4 bg-gradient-to-l from-black via-[#132b44] to-[#2A6A8D] rounded-lg shadow-lg animate-gradient-move bg-[length:200%_200%]">
          <span className="text-5xl">📚</span>
          <h3 className="text-lg font-bold mt-2">Education</h3>
          <p className="text-sm mt-1">
            I hold a degree in Electronics and Communication and I am focusing
            on technologies like React, Next.js, and Tailwind CSS.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 p-4 rounded-lg shadow-lg max-w-[550px] bg-gradient-to-r from-black via-[#132b44] to-[#2A6A8D] animate-gradient-move bg-[length:200%_200%]">
          <span className="text-5xl">🧠</span>
          <h3 className="text-lg font-bold mt-2">Problem-Solving</h3>
          <p className="text-sm mt-1">
            I approach challenges with a logical and systematic mindset.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center">
        {/* Left Column */}
        <div className="flex-1 p-4 rounded-lg shadow-lg bg-gradient-to-r from-black via-[#132b44] to-[#2A6A8D] animate-gradient-move bg-[length:200%_200%] ">
          <span className="text-5xl">💼</span>
          <h3 className="text-lg font-bold mt-2">Experience</h3>
          <p className="text-sm mt-1">
            I have a diverse portfolio of projects.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 p-4 rounded-lg shadow-lg bg-gradient-to-l from-black via-[#132b44] to-[#2A6A8D] animate-gradient-move bg-[length:200%_200%]">
          <span className="text-5xl">🛠️</span>
          <h3 className="text-lg font-bold mt-2">Technical Skills</h3>
          <p className="text-sm mt-1">
            As a Fullstack Web Developer, I specialize in React JS, Next.js, and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
