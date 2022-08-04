import React from "react";
import "./styles/Navbar.css";

const Navbar = () => {
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
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li className="nav-item">
                <a href="#hero" dataAfter="Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" dataAfter="Projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contacts" dataAfter="Contacts">
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
