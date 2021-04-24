import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="sectionCaption">Who I am</h2>
        <div className="row mt-5">
          <div className="col-lg-1"></div>
          <div
            className="col-lg-5"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <p className="aboutContent">
              I am a Computer Science and Engineering student currently
              focussing on FrontEnd Web Development. I am pretty interested in
              Computer Networking protocols and Architecture. I am a part of
              Tamizh Literary Society. I have won several prizes in various
              oratorical competitions
              <br /><br />
              <span className="arsenal">My Arsenal: </span><span className="tools"> React, C++, C,
              Flutter, Java, JS, HTML, CSS, Python, Jest, RTL</span>
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div
            className="col-lg-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="aboutPicture"
              src="/assets/images/about-picture.jpg"
              alt="AboutPicture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
