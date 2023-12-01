import React from "react";
import "./Programs.css";
import {programsData} from "../../Data/programsData"
import RightArrow from "../../assests/rightArrow.png"
import { Link } from "react-scroll";

const Program = () => {
  return (
    <div className="programs" id="programs">
      {/* -------------------------header--------------------------- */}
      <div className="programs-header">
        <span className="outline-text">Explore our</span>
        <span>Programs</span>
        <span className="outline-text">to shape you</span>
      </div>
      {/* -----------------programs--------------------------- */}
      <div className="programs-categories">
        {programsData.map((program)=>{
          return(
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span><Link to="join-us" spy={true} smooth={true}>Join Now</Link></span><img src={RightArrow} alt="right-arrow"/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Program;
