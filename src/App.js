import "bootstrap/dist/css/bootstrap.min.css";
import { gsap, TweenLite } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Journey } from "./components/Journey/Journey";
import { NavBar } from "./components/NavBar/NavBar";
import { Portfolio } from "./components/Portfolio/Portfolio";

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const onClick = (target) => {
    const targetEl = document.querySelector(target);
    const scrollYPos = targetEl.offsetTop;
    TweenLite.to(window, 1, {
      scrollTo: { y: scrollYPos },
      ease: "power4",
    });
  };

  return (
    <div className="pageWrapper">
      <NavBar
        onClick={(target) => {
          onClick(target);
        }}
      />
      <Home />
      <About />
      <Journey />
      <Portfolio />
    </div>
  );
}

export default App;
