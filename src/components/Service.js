import React from "react";
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className="service">
      <div className="service-up">
        <h1>City Weathe app</h1>
        <p>
          This is a weather app where you can checked the weather of any city to
          check the weather click the below button
        </p>
        <button><Link to="/" >Check Weather</Link></button>
      </div>
      <div></div>
    </div>
  );
};

export default Service;
