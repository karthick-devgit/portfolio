import React from "react";
import "./NavBar.css";
export const NavBar = ({ onClick }) => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light navbar-fixed-top"
      style={{ backgroundColor: "rgba(255,255,255,1)", zIndex: "999" }}
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
          <ul
            className="navbar-nav mr-auto ml-auto"
            style={{ background: "rgba(255,255,255)" }}
          >
            <li className="nav-item active">
              <span
                className="nav-link"
                onClick={() => {
                  onClick("#home");
                }}
              >
                Home <span className="sr-only">(current)</span>
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => {
                  onClick("#about");
                }}
              >
                About Me
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => {
                  onClick("#journey");
                }}
              >
                My Journey
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => {
                  onClick("#portfolio");
                }}
              >
                Portfolio
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => {
                  onClick("#home");
                }}
              >
                Contact Me
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
