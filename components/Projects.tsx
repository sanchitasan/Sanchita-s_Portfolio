import React from "react";

const projects = [
  {
    title: "Flappy Bird Game",
    description: "A browser-based clone of the classic Flappy Bird game, built using HTML, CSS, and JavaScript with smooth physics-based mechanics.",
    image: "/Flappy Bird.png",
    link: "https://flappy-bird-six-iota.vercel.app",
  },
  {
    title: "Dribbble Clone",
    description: "A frontend replica of Dribbble’s homepage, demonstrating UI/UX design skills using HTML, CSS, and JavaScript.",
    image: "/Dribbble.png",
    link: "https://sanchita-nitr.github.io/Dribbble_Clone/",
  },
  {
    title: "Weather Forecast",
    description: "A real-time weather forecasting app that fetches live weather data using OpenWeather API, providing temperature, humidity, and weather conditions.",
    image: "/Weather.png",
    link: "https://sanchita-nitr.github.io/Weather-Forecast/",
  },
  {
    title: "Credit Card Fraud Detection",
    description: "A machine learning model deployed using Streamlit to detect fraudulent transactions based on user data patterns.",
    image: "/Credit Card.png",
    link: "https://credit-card-fraud-detection-model.streamlit.app",
  },
  {
    title: "Image Gallery",
    description: "A dynamic and responsive image gallery with filtering options, built using HTML, CSS, and JavaScript.",
    image: "/ImageGallery.png",
    link: "https://sanchita-nitr.github.io/ImageGallery/",
  },
];

const Projects = () => {
  return (
    <div
      className="text-gray-300 font-serif pb-16"
      style={{
        background: "linear-gradient(to top, #000 10%, #1B3A5B 75%, #2A6A8D)",
      }}
    >
      <h1 className="mb-20 text-3xl text-center font-extrabold md:text-5xl lg:text-7xl text-cyan-200 drop-shadow-lg">
        My Projects
      </h1>

      <div className="max-w-7xl mx-auto grid gap-12 px-6 lg:px-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center bg-gradient-to-r from-[#000613] via-[#1e293b] to-[#2A6A8D] shadow-2xl rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Project Image */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </a>

            {/* Project Details */}
            <div className="md:w-1/2 p-8 text-center md:text-left">
              <h2 className="text-white text-3xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-lg text-cyan-300 hover:text-cyan-400 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
