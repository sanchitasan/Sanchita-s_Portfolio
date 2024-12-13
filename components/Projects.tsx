import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="  text-gray-400 font-serif">
        <h1 className=" md:mt-20 mt-9 lg:mb-20 mb-10 text-2xl text-center font-serif font-extrabold md:text-4xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-pink-200">
            My Projects
          </span>
        </h1>
        <ul className="lg:mx-0 md:mx-0 mx-5 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <li>
            <a
              href="https://flappy-bird-six-iota.vercel.app"
              target="_blank"
            >
              <img src="/Flappy Bird.png" alt="Game" width={600} />{" "}
            </a>{" "}
            <p className=" text-white text-lg ">Flappy Bird Game</p>
          </li>
          <li>
            <a
              href="https://sanchita-nitr.github.io/Dribbble_Clone/"
              target="_blank"
            >
              <img src="/Dribbble.png" alt="Dribbble Clone" width={600} />{" "}
            </a>{" "}
            <p className=" text-white text-lg ">Dribbble</p>
          </li>
          <li>
            <a
              href="https://sanchita-nitr.github.io/Weather-Forecast/"
              target="_blank"
            >
              <img src="/Weather.png" alt="Weather Forecast" width={500} />{" "}
            </a>

            <p className=" text-white text-lg ">Weather Forecast</p>
          </li>
          <li>
            <a
              href="https://credit-card-fraud-detection-model.streamlit.app"
              target="_blank"
            >
              <img src="/Credit Card.png" alt="Fraud Detection" width={500} />{" "}
            </a>

            <p className=" text-white text-lg ">Credit Card Fraud Detection Model</p>
          </li>
          <li>
            <a
              href="https://sanchita-nitr.github.io/ImageGallery/"
              target="_blank"
            >
              {" "}
              <img src="/ImageGallery.png" alt="" width={600} />{" "}
            </a>
            <p className=" text-white text-lg">ImageGallery</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
