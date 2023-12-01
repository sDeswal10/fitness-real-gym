import React from "react";
import "./Plans.css";
import { plansData } from "../../Data/PlansData";
import WhiteTick from "../../assests/whiteTick.png";
import { Link } from "react-scroll";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="outline-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="outline-text">NOW WITH US</span>
      </div>
      {/* -------------------Plans Card------------ */}
      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>₹ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="feature">
                      <img src={WhiteTick} alt="white tick" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>See more benefits </span>
              </div>
              <button className="btn"><Link to="join-us" spy={true} smooth={true}>Join Now</Link></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
