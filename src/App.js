import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Journey } from "./components/Journey/Journey";
import { Portfolio } from "./components/Portfolio/Portfolio";
function App() {
  return (
    <div className="pageWrapper">
      <NavBar />
      <Home />
      <About />
      <Journey />
      <Portfolio />
    </div>
  );
}

export default App;
