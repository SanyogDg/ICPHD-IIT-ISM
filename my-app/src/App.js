import './App.css';
import Speakers from './components/Speakerslide/speakerslide';
import Sponsers from './components/Sponsorslide/sponsorslide';
import HomeRegImg from './components/homeRegImg'

function App() {
  return (
    <div className="">
       <HomeRegImg/>
       <Sponsers/>
       <Speakers/>
    </div>
  );
}

export default App;
