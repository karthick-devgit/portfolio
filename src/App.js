import "./App.css";
import { NavBar } from "./components/NavBar";
import { ProfilePicture } from "./components/ProfilePicture";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProfileCaption } from "./components/ProfileCaption";
import Confetti from "react-confetti";
import { About } from "./components/About";
function App() {
  return (
    <>
      <NavBar />
      <Confetti className="confetti" numberOfPieces={50} gravity={0.1} />
      <ProfilePicture />
      <ProfileCaption />
      <About />
    </>
  );
}

export default App;
