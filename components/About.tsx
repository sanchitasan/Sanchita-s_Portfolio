import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div id="about">
        <h1 className=" md:mt-20 mt-8 text-2xl md:text-4xl text-center font-serif font-extrabold lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-pink-200">
            About Me
          </span>
        </h1>
        <div
          className="content text-justify justify-between text-base pt-5 mx-4 md:text-xl "
        >
          <h1>
            {" "}
            I&apos;m{" "}
           <b className="text-purple">Sanchita Priyadarshinee</b> 
            , a student at NIT Rourkela pursuing a B.Tech in <b className=" text-purple ">Electronics and Communication Engineering </b>with a major in front-end web development. With expertise in <b className=" text-purple"> HTML, CSS, JavaScript, React.js, and Tailwind CSS</b>, my area of expertise is developing user-friendly interfaces and incorporating cutting-edge technologies into projects. With my background in <b className=" text-purple">Python</b> and   <b className=" text-purple"> Scikit-learn</b>, I also have an interest in <b className=" text-purple">AI and machine learning</b>. I am well-versed in <b className="text-purple">MySQL and MongoDB</b>  database administration. Distinguished by my <b className=" text-purple">leadership, strategic planning</b>, and   <b>organizational abilities</b>, I guarantee effective project implementation while upholding a strict time and resource management regimen. I'm a badminton enthusiast who values cooperation and physical conditioning.
          </h1>
        </div>
      </div>

      <div className="mt-28 rounded-2xl">
        <div className=" hover:scale-110 duration-500 p-6 bg-gradient-to-r from-black  via-purple to-black">
          <p className=" lg:text-5xl md:text-4xl uppercase font-extrabold text-black text-center shadow-black shadow-md lg:my-10 md:my-10 mb-5 font-serif ">
            Skills
          </p>
          <div className=" grid grid-cols-1 font-montserrat font-extrabold italic tracking-wider text-gray-950 shadow-mdmd:px-16 px-5 md:py-16 md:text-2xl lg:mx-32 ">
            <ul>
              <li>Languages: Python, C++, Java, JavaScript, TypeScript .</li>
              <li className="lg:mt-5 md:mt-5">
                Version Control: Git, GitHub .
              </li>
              <li className="lg:mt-5 md:mt-5">
                Frontend Technologies: React.js, Next.js .
              </li>
              <li className="lg:mt-5 md:mt-5">Databases: SQL .</li>
              <li className="lg:mt-5 md:mt-5 md:mb-0 mb:5">ML: CNN, ANN .</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
