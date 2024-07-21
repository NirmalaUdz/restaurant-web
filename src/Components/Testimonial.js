import React from "react";
import ProfilePic from "../Assets/smile.jpeg";
import { AiFillStar } from "react-icons/ai";
import Navbar from "./Navbar";
import Clock from "./Clock";
const Testimonial = () => {
  return (
    <div className="testo-theme"><Navbar></Navbar>
    <Clock />
    <div className="work-section-wrapper">
      <div className="work-section-top">
        
        <h1 className="testi-primary-heading">What They Are Saying:</h1>
        <p className="primary-text">
        Welcome to our review page! Here, you'll find honest feedback from our valued
         customers about their experiences with our REStMAr platform. We proud ourselves
          on delivering delicious meals and exceptional service through our platform. Read on 
          to see what others are saying about us!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
         By the Restaurant I found through this platform the dishes arrived
         hot and fresh to maintain the quality. The 
         flavors were outstanding, with each bite showcasing the care and expertise put into
          its preparation. The delivery was prompt and the staff courteous, ensuring a smooth
          and pleasant experience.I thank this platform for giving me a better fast food place with good quality affordable food.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Aruna Silva</h2>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;