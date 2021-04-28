import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { ProfileCaption } from "./ProfileCaption";
import "./Home.css";
import { ProfilePicture } from "./ProfilePicture";
import { gsap, TimelineMax } from "gsap";

export const Home = () => {
  useEffect(() => {
    const name1 = document.querySelector(".displayName1");
    const name2 = document.querySelector(".displayName2");
    const image = document.querySelector(".profilePicture");
    const heyIAm = document.querySelector(".hey-im");
    let tl = new TimelineMax();
    tl.fromTo(
      name1,
      { opacity: 0, y: -150, x: -100, ease: "power4.out" },
      { opacity: 1, y: -150, x: 0, duration: 1, ease: "power4.out" },
      1
    )
      .fromTo(
        name2,
        {
          opacity: 0,
          y: -150,
          x: 100,
          ease: "power4.out",
        },
        { opacity: 1, y: -150, x: 0, duration: 1, ease: "power4.out" },
        "-=1"
      )
      .fromTo(
        [name1, name2],
        { opacity: 1, y: -150, x: 0, duration: 1, ease: "power4.out" },
        { opacity: 1, y: 0, x: 0 }
      )
      .from(image, {
        duration: 1,
        opacity: 0,
        y: 20,
      })
      .from(heyIAm, {
        opacity: 0,
        duraion: 1,
      });
  }, []);

  return (
    <section id="home">
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
