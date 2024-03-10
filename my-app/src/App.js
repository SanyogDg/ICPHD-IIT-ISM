import './App.css';
import Speakers from './components/Speakerslide/speakerslide';
import Sponsers from './components/Sponsorslide/sponsorslide';
import HomeRegImg from './components/homeRegImg'
import HomeInfoContent from './components/homeInfoContent';


function App() {
  return (
    <div className="bg-[#DEDFE2]">
       <HomeRegImg/>
       <Sponsers/>
       <Speakers/>
       <HomeInfoContent/>
    </div>
  );
}

export default App;
