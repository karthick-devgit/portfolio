import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import "./About.css";

export const About = () => {
  let aboutContent = useRef(null);
  let aboutPicture = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(aboutContent.current, {
      duration: 2,
      opacity: 0,
      x: -30,
      ease: "power4.out",
      scrollTrigger: {
        trigger: document.querySelector(".aboutContent"),
        start: "top center",
        end: "bottom bottom",
      },
    });
    gsap.from(document.querySelectorAll(".icon"), {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "power4.out",
      scrollTrigger: {
        trigger: document.querySelector(".icon"),
        start: "top 80%",
        end: "bottom bottom",
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(aboutPicture.current, {
      duration: 2,
      opacity: 0,
      x: 30,
      ease: "power4.out",
      scrollTrigger: {
        trigger: document.querySelector(".aboutPicture"),
        start: "top center",
        end: "bottom bottom",
      },
      delay: -1,
    });
  }, []);

  return (
    <section id="about" className="container">
      <h2 className="sectionCaptionAbout">Who I am</h2>
      <div className="aboutWrapper">
        <div className="aboutContent" ref={aboutContent}>
          <p>
            I am a Computer Science and Engineering student currently focussing
            on FrontEnd Web Development. I am pretty interested in Computer
            Networking protocols and Architecture. I am a part of Tamizh
            Literary Society and have organized several intra college cultural
            events.
          </p>
          <div className="strong-text">
            <strong>Tools I have used</strong>
          </div>

          <div className="icon-grid">
            <span className="icon">
              <img src="/assets/icons/reactjs.png" alt="logo" />
            </span>
            <span className="icon">
              <img src="/assets/icons/html.png" alt="logo" />
            </span>
            <span className="icon">
              <img src="/assets/icons/css.png" alt="logo" />
            </span>
            <span className="icon">
              <img src="/assets/icons/javascript.png" alt="logo" />
            </span>
            <span className="icon">
              <img src="/assets/icons/java.png" alt="logo" />
            </span>
            <span className="icon">
              <img src="/assets/icons/python.png" alt="logo" />
            </span>
            <span className="icon">
              <img src="/assets/icons/rtl.png" alt="logo" />
            </span>
            <span className="icon">
              <img src="/assets/icons/jest.png" alt="logo" />
            </span>
            <span className="icon">
              <img src="/assets/icons/flutter.png" alt="logo" />
            </span>
          </div>
        </div>
        <div className="aboutPictureWrapper">
          <img
            ref={aboutPicture}
            className="aboutPicture"
            src="/assets/images/about-picture.jpg"
            alt="AboutPicture"
          />
        </div>
      </div>
    </section>
  );
};
