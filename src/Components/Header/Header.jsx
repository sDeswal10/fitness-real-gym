import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assests/logo.png";
import Bars from "../../assests/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const isMobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} className="logo" alt="The Real Fitness" />
      {menuOpend === false && isMobile === true ? (
        <div onClick={() => setMenuOpened(!menuOpend)}>
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-list">
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              smooth={true}
              spy={true}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              smooth={true}
              spy={true}
            >
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              to="why-us"
              smooth={true}
              spy={true}
            >
              Why Us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              smooth={true}
              spy={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              smooth={true}
              spy={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
