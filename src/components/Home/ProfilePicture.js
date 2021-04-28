import React, { useEffect, useRef } from "react";
import "./Home.css";
import {TweenMax} from "gsap";

export const ProfilePicture = () => {
  return (
    <div className="container profilePictureContainer" >
      <img
        className="profilePicture"
        src="assets/images/profile-picture.jpg"
        alt="ProfilePicture"
      />
    </div>
  );
};
