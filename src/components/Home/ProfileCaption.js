import React from "react";
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
        className="hey-im"
        style={{
          color: "rgba(20,20,20,0.7)",
          fontFamily: "inherit",
          fontWeight: "400",
          fontStyle: "italic",
        }}
      >
        Hey, I'm
      </h4>
      <div className="nameContainer">
        <div className="displayName1">KARTHICK</div>{" "}
        <div className="displayName2">SANKAR</div>
      </div>
    </div>
  );
};
