import React from "react";
import image from "../img/bg.png";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h1>Weather App</h1>
        <h2>
          Created By <span>Suraj Jha</span>
        </h2>
        <p>
          This is a weather app where you can checked the weather of any city to
          check the weather click the below button
        </p>
        <button>
            <Link to="/" >Check Weather</Link>
        </button>
      </div>
      <div className="about-right">
        <img src={image} alt="..." />
      </div>
    </div>
  );
};

export default About;
