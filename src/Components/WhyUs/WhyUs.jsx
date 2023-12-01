import React from "react";
import "./WhyUs.css";
import Image1 from "../../assests/image1.png";
import Image2 from "../../assests/image2.jpg";
import Image3 from "../../assests/image3.jpg";
import Image4 from "../../assests/image4.jpg";
import NB from "../../assests/nb.png";
import Nike from "../../assests/nike.png";
import Adidas from "../../assests/adidas.png";
import Tick from "../../assests/tick.png";
const WhyUs = () => {
  return (
    <div className="why-us" id="why-us">
      <div className="why-us-left">
        <img src={Image1} alt="image" />
        <img src={Image2} alt="image" />
        <img src={Image3} alt="image" />
        <img src={Image4} alt="image" />
      </div>
      <div className="why-us-right">
        <span>Some Reasons</span>
        <div>
          <span className="outline-text">why </span>
          <span>choose us?</span>
        </div>
        <div className="why-us-right-details">
          <div>
            <img src={Tick} alt="tick" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={Tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={Tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={Tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="partners-text">Our Partners</span>
        <div className="partners-logo">
          <img src={NB} alt="nb" />
          <img src={Nike} alt="nike" />
          <img src={Adidas} alt="adidas" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
