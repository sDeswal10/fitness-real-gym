import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import HeroImage from "../../assests/hero_image.png"
import HeroImageBack from "../../assests/hero_image_back.png"
import Heart from "../../assests/heart.png"
import Calories from "../../assests/calories.png"
import { motion } from "framer-motion";
import NumberCounter from "number-counter"
import { Link } from "react-scroll";

const Hero = () => {
  const transition = {type: "spring", duration: 3 };
  const isMobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="hero-left">
        <Header />
        {/* ------Best Text--------------- */}
        <div className="the-best-text">
          <motion.div
            initial={{left: isMobile ? "160px" : "200px"}}
            whileInView={{left: "8px"}}
            transition={{...transition, type: "tween"}}
          >
          </motion.div>
          <span>The Best Fitness Club in Town</span>
        </div>
        {/* -------------hero text-----------------------*/}
        <div className="hero-text">
          <div>
            <span className="outline-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build ideal body and live up
              your life to fullest
            </span>
          </div>
        </div>
        {/* --------------figures-------------------- */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay="4" preFix="+"/></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay="4" preFix="+"/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay="4" preFix="+"/></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* -----------------------hero buttons---------------------- */}
        <div className="hero-button">
          <button className="btn"><Link to="programs" spy={true} smooth={true}>Get Started</Link></button>
          <button className="btn"><Link to="plans" spy={true} smooth={true}>Learn More</Link></button>
        </div>
      </div>
      <div className="hero-right">
        <button className="btn"><Link to="join-us" smooth={true} spy={true}>Join Now</Link></button>
        <motion.div
        initial={{right: "-1rem"}}
        whileInView={{right: "4rem"}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="Heart Image" className="heart-image"/>
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
        {/* ----------------hero images---------------------------------- */}
        <img src={HeroImage} className="hero-image" alt="Hero Image"/>
        <motion.img
        initial={{right: "11rem"}}
        whileInView={{right: "20rem"}}
        transition={transition}
        src={HeroImageBack} className="hero-image-back" alt="Hero Image Back"/>
        <motion.div 
        initial={{right: "37rem"}}
        whileInView={{right: "28rem"}}
        transition={transition}
        className="calories">
          <img src={Calories} alt="Calories Count"/>
          <div>
            <span>Calories Burned</span><span>220 kacl</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
