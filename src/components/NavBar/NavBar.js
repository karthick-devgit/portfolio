import React from "react";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <nav id="navbar"
      className="navbar navbar-expand-lg navbar-light navbar-fixed-top"
      style={{ backgroundColor: "rgba(255,255,255,1)", zIndex:"999" }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-auto" style={{background: "rgba(255,255,255)"}}>
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#journey">
                My Journey
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#home">
              Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
