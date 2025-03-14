"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    description: "Developed a Credit Card Fraud Detection Model in Python, achieving 94.15% accuracy on training data and 93.90% accuracy on test data. Addressed class imbalance through Undersampling.",
    image: "/Credit Card.png",
    link: "https://credit-card-fraud-detection-model.streamlit.app",
  },
  {
    title: "Crypto Currency Converter",
    description: "Developed a cryptocurrency converter that fetches real-time conversion rates for multiple currencies using the CoinGecko API. Implemented historical price trend visualization with Chart.js to display a 7-day price fluctuation.",
    image: "/crypto.png",
    link: "https://crypto-currency-converter-six.vercel.app",
  },
  {
    title: "Code Metrics",
    description: "Integrated AI/ML capabilities into the Code Metrics Dashboard by developing and deploying machine learning models using Flask APIs, enabling predictions of coding performance and streak trends.",
    image: "/code.png",
    link: "https://code-metrics-o6us.vercel.app",
  },
  {
    title: "Weather Forecast",
    description: "A real-time weather forecasting app that fetches live weather data using OpenWeather API, providing temperature, humidity, and weather conditions.",
    image: "/Weather.png",
    link: "https://sanchita-nitr.github.io/Weather-Forecast/",
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
      id="projects"
      className="text-gray-300 font-serif pb-16"
      style={{
        background: "linear-gradient(to top, #000 10%, #1B3A5B 75%, #2A6A8D)",
      }}
    >
      {/* Heading Animation */}
      <motion.h1
        className="md:mb-20 mb-5 lg:text-7xl md:text-6xl text-3xl text-center font-extrabold text-cyan-200 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ amount: 0.5 }} // Triggers when 50% of the heading is visible
      >
        My Projects
      </motion.h1>

      <div className="max-w-7xl mx-auto grid gap-12 px-6 lg:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row items-center bg-gradient-to-r from-[#000613] via-[#1e293b] to-[#2A6A8D] shadow-2xl rounded-lg overflow-hidden ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Repeats animation every time it appears in view
            whileHover={{
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
            }}
          >
            {/* Project Image with Bounce Effect */}
            <motion.a
              href={project.link}
              target="_blank"
              rel=""
              className="md:w-1/2"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.a>

            {/* Project Details */}
            <div className="md:w-1/2 p-8 text-center md:text-left">
              <motion.h2
                className="text-white md:text-3xl text-xl font-bold mb-3"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                {project.title}
              </motion.h2>
              <p className="text-gray-400 md:text-lg leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-lg text-cyan-300 hover:text-cyan-400 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
