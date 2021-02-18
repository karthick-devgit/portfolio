import React from "react";
import Typed from "react-typed";
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
      <h1 className="display-name">KARTHICK</h1>
      <Typed
        className="typed-text"
        strings={["Learn.", "Unlearn.", "Relearn."]}
        typeSpeed={80}
        backSpeed={80}
        loop
      ></Typed>
    </div>
  );
};
