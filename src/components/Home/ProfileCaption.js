import React from "react";
import Typed from "react-typed";
import "./Home.css";
export const ProfileCaption = () => {
  return (
    <div
      className="container mt-5"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4
        style={{
          color: "rgba(20,20,20,0.7)",
          fontFamily: "inherit",
          fontWeight: "400",
          fontStyle: "italic",
        }}
      >
        Hey, I'm
      </h4>
      <Typed
        className="displayName"
        strings={["KARTHICK"]}
        typeSpeed={300}
        backSpeed={80}
      ></Typed>
    </div>
  );
};
