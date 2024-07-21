import React from "react";

import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";
import Clock from "./Clock";
const About = () => {
  return (
    <div className="for-you"><Navbar></Navbar>
    <Clock />
    <div className="about-section-container">
      
      
      <div className="about-section-text-container">
     
        
        <h1 className="about-primary-heading">
          Need Better food places with affordable prices? 
        </h1>
        <p className="about-primary-text">
        At REStMAr , we're passionate about bringing you delicious, high-quality meals providing Restaurants straight 
        to you. </p>
        <p className="about-primary-text">
        Our goal is to provide the freshest food to customers through our platform.
         Whether you're craving comfort food or something new, we've got something to satisfy
          every palate through our Restaurant listings.
        </p>
        
        </div>
      </div>
    </div>
    
  );
};

export default About;