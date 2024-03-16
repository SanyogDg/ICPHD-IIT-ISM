import "./App.css";
import Speakers from "./components/Speakerslide/speakerslide";
import Sponsers from "./components/Sponsorslide/sponsorslide";
import HomeRegImg from "./components/homeRegImg";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./components/Aboutus/Aboutus";

function App() {
  return (
    <div className="">
      <Navbar />
      <HomeRegImg />
      <Sponsers />
      <Aboutus />
      <Speakers />
    </div>
  );
}

export default App;
