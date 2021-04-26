import { gsap, TweenMax } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Journey.css";

export const Journey = () => {
  let [image1, image2, image3] = [useRef(null), useRef(null), useRef(null)];
  let [desc1, desc2, desc3] = [useRef(null), useRef(null), useRef(null)];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    TweenMax.from(image1.current, 1, {
      opacity: 0,
      y: 20,
      ease: "power4.out",
      scrollTrigger: {
        start: "top 75%",
        end: "bottom bottom",
        trigger: document.querySelector("#image1"),
      },
    });

    TweenMax.from(desc1.current, 1, {
      opacity: 0,
      x: 20,
      ease: "power4.out",
      scrollTrigger: {
        start: "top 75%",
        end: "bottom bottom",
        trigger: document.querySelector("#image1"),
      },
    });
  }, []);

  useEffect(() => {
    TweenMax.from(image2.current, 1, {
      opacity: 0,
      y: 20,
      ease: "power4.out",
      scrollTrigger: {
        start: "top 75%",
        end: "bottom bottom",
        trigger: document.querySelector("#image2"),
      },
    });
    TweenMax.from(desc2.current, 1, {
      opacity: 0,
      x: 20,
      ease: "power4.out",
      scrollTrigger: {
        start: "top 75%",
        end: "bottom bottom",
        trigger: document.querySelector("#image2"),
      },
    });
  }, []);

  useEffect(() => {
    TweenMax.from(image3.current, 1, {
      opacity: 0,
      y: 20,
      ease: "power4.out",
      scrollTrigger: {
        start: "top 75%",
        end: "bottom bottom",
        trigger: document.querySelector("#image3"),
      },
    });
    TweenMax.from(desc3.current, 1, {
      opacity: 0,
      x: 20,
      ease: "power4.out",
      scrollTrigger: {
        start: "top 75%",
        end: "bottom bottom",
        trigger: document.querySelector("#image3"),
      },
    });
  }, []);

  return (
    <section id="journey">
      <div className="container">
        <h2 className="sectionCaptionJourney"> Boulevard of Beautiful Dreams</h2>
        <div className="contentContainer">
          <div className="imageWrapper left">
            <img
              ref={image1}
              id="image1"
              className="displayImage"
              src="assets/images/jivox-logo.png"
              alt="jivox"
            />
          </div>
          <div className="details right">
            <div ref={desc1}>
              <h5 className="institution">Jivox Software India Pvt. Ltd.</h5>
              <h6 className="natureOfWork">Software Engineering Trainee</h6>
              <p className="time">Since 2021</p>
            </div>
          </div>
          <div className="imageWrapper left">
            <img
              ref={image2}
              id="image2"
              className="displayImage"
              src="assets/images/sastra-image.jpg"
              alt="sastra"
            />
          </div>
          <div className="details right">
            <div ref={desc2}>
              <h5 className="institution">SASTRA Deemed To Be University</h5>
              <h6 className="natureOfWork">
                B.Tech. Computer Science and Engg.
              </h6>
              <p className="time">From 2017 to 2021</p>
            </div>
          </div>
          <div className="imageWrapper left">
            <img
              ref={image3}
              id="image3"
              className="displayImage"
              src="assets/images/cheran-image.jpg"
              alt="cheran"
            />
          </div>
          <div className="details right">
            <div ref={desc3}>
              <h5 className="institution">Cheran Matric. Hr. Sec. School</h5>
              <h6 className="natureOfWork">Maths + Computer Science</h6>
              <p className="time">From 2015 to 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
