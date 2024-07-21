import React from "react";
import naveen from "../Assets/naveen.jpeg";
import kavindu from "../Assets/kavindu.jpeg";
import januda from "../Assets/januda.jpeg";
import Navbar from "./Navbar";
import historyy from "../Assets/res.jpg"
import missionn from "../Assets/mis.jpg"
import valuee from "../Assets/val.jpg"
import Clock from "./Clock";
const Work = () => {
  const workInfoData = [
   
  ];
  return (
    <div className="about-us"><Navbar></Navbar>
    <Clock />
      <div className="work-section-wrapper">
        <div className="work-section-top">
          
          <h1 className="work-primary-heading">About Us</h1>
          
          <h2 className="mission">Our Mission</h2>
          <img src={missionn} alt="" />
          <p className="primary-text">Our mission is to bring affordable high-quality Food places to
            you Through REStMAr by providing a convenient and delightful dining experience.
            </p>
            <h2 class="values">Our Values</h2>
            <img src={valuee} alt="" />
<ul classname="values-list">
  <li>
    <strong>Quality:</strong> We use only registering the trusted Restaurants to our platform
  </li>
  <li>
    <strong>Customer Satisfaction:</strong> We are committed to providing excellent service and delicious food Restaurants to our customers.
  </li>
  <li>
    <strong>Innovation:</strong> We continually seek new ways to improve our customer service and delivery service.
  </li>
  <li>
    <strong>Community:</strong> We value our community and strive to give back whenever possible.
  </li>
</ul>


        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;