import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="jumbotron container">
      <div className="row">
        <div className="col-lg-6">
          <h2>This is who I am</h2>
          <p>
            I am a Computer Science and Engineering student currently channeling
            my attention towards FrontEnd development. I am pretty interested in
            Computer Networking protocols and Architecture. I am a part of
            Tamizh Literary Society. I have decent oratorical skills
          </p>
        </div>
        <div className="col-lg-6" style={{display:"flex",justifyContent:"center"}}>
          <img
            className="about-picture"
            src="/assets/images/about-picture.jpg"
          />
        </div>
        </div>
      </div>
    </div>
  );
};
