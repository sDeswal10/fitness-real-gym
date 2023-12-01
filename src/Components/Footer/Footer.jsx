import React from "react";
import "./Footer.css"
import Instagram from "../../assests/instagram.png";
import Facebook from "../../assests/facebook.png";
import Linkedin from "../../assests/linkedin.png";
import Logo1 from "../../assests/logo1.png";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://www.facebook.com/realfitnessgym77/">
            <img src={Facebook} alt="facebook logo" />
          </a>
          <a href="https://www.instagram.com/real_fitness_gym_/">
            <img src={Instagram} alt="instagram logo" />
          </a>
          <a href="https://www.linkedin.com/in/sachindeswal10">
            <img src={Linkedin} alt="linkedin logo" />
          </a>
        </div>
        <div className="logo-footer">
          <img src={Logo1} alt="Real Fitness Gym" />
        </div>
      </div>
      <div className="blur blur-footer-1"></div>
      <div className="blur blur-footer-2"></div>
    </div>
  );
}

export default Footer;
