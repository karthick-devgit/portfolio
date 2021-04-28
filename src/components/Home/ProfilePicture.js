import React, { useEffect, useRef } from "react";
import "./Home.css";
import {TweenMax} from "gsap";

export const ProfilePicture = () => {
  
  
  return (
    <div className="container" style={{ display: "flex" }}>
      <img
        className="profilePicture ml-auto mr-auto"
        src="assets/images/profile-picture.jpg"
        alt="ProfilePicture"
      />
    </div>
  );
};
