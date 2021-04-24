import React from "react";
import Confetti from "react-confetti";
import { ProfileCaption } from "./ProfileCaption";
import "./Home.css";
import { ProfilePicture } from "./ProfilePicture";


export const Home = () => {
  return (
    <section id="home" >
      <Confetti
        className="confetti"
        numberOfPieces={400}
        recycle={false}
        gravity={0.08}
      />
      <ProfilePicture />
      <ProfileCaption />
    </section>
  );
};
