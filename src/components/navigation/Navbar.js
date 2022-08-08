import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleMenuState = () => {
    setIsHamburgerActive(!isHamburgerActive);
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  useEffect(() => {
    const scrollColorChanger = () => {
      const header = document.querySelector(".header.container");
      let scroll_position = window.scrollY;

      if (scroll_position > 250) {
        header.style.backgroundColor = "rgba(46, 46, 56, .99)";
        header.style.backgroundImage =
          "linear-gradient(135deg,rgb(30, 30, 34) 0%, rgb(58, 58, 58)100%)";
      } else {
        header.style.backgroundColor = "rgba(31, 30, 30, 0.1)";
        header.style.backgroundImage = "none";
      }
    };

    window.addEventListener("scroll", scrollColorChanger);

    return () => {
      window.removeEventListener("scroll", scrollColorChanger);
    };
  }, []);

  return (
    <header id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <h1>
              <span className="accented-text">L</span>enny{" "}
              <span className="accented-text">G</span>ith
            </h1>
          </div>

          <div className="nav-list">
            <div
              className={`hamburger ${isHamburgerActive ? "active" : null}`}
              onClick={handleMenuState}
            >
              <div className="bar"></div>
            </div>
            <ul className={isMobileMenuActive ? "active" : null}>
              <li className="nav-item">
                <a href="#hero" data-after="Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" data-after="Projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" data-after="About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#contacts" data-after="Contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
