import React, { useEffect, useRef } from "react";
import "./Home.css";
import {TweenMax} from "gsap";

export const ProfilePicture = () => {
  let image = useRef(null);
  useEffect(()=>{
    TweenMax.from(image,1,{opacity: 0,y: 20});
  },[]);
  
  return (
    <div className="container" style={{ display: "flex" }}>
      <img
        ref={(el) => {
          image = el;
        }}
        className="profilePicture ml-auto mr-auto"
        src="assets/images/profile-picture.jpg"
        alt="ProfilePicture"
      />
    </div>
  );
};
