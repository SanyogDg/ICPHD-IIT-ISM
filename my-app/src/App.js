import "./App.css";
import Speakers from "./components/Speakerslide/speakerslide";
import Sponsers from "./components/Sponsorslide/sponsorslide";
import HomeRegImg from "./components/homeRegImg";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <HomeRegImg />
      <Sponsers />
      <Speakers />
    </div>
  );
}

export default App;
