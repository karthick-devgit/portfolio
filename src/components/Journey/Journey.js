import React from "react";
import "./Journey.css";
export const Journey = () => {
  return (
    <section id="journey">
      <div className="container">
        <h2 className="sectionCaptionJourney"> Boulevard of Broken Dreams</h2>
        <div className="contentContainer">
          <div className="imageWrapper left">
            <img
              className="displayImage"
              src="assets/images/jivox-logo.png"
              alt="jivox"
            />
          </div>
          <div className="details right">
            <h5 className="institution">Jivox Software India Pvt. Ltd.</h5>
            <h6 className="natureOfWork">Software Engineering Trainee</h6>
            <p className="time">Since 2021</p>
          </div>
          <div className="imageWrapper left">
            <img
              className="displayImage"
              src="assets/images/sastra-image.jpg"
              alt="sastra"
            />
          </div>
          <div className="details right">
            <h5 className="institution">SASTRA Deemed To Be University</h5>
             <h6 className="natureOfWork">B.Tech. Computer Science and Engg.</h6>
            <p className="time">From 2017 to 2021</p>
          </div>
          <div className="imageWrapper left">
            <img
              className="displayImage"
              src="assets/images/cheran-image.jpg"
              alt="cheran"
            />
          </div>
          <div className="details right">
            <h5 className="institution">Cheran Matric. Hr. Sec. School</h5>
             <h6 className="natureOfWork">Maths + Computer Science</h6>
            <p className="time">From 2015 to 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
};
