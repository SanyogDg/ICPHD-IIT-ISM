import React from 'react'
import HomeRegImg from '../homeRegImg'
import 'react-router-dom'
import Speakers from '../Speakerslide/speakerslide';
import Sponsers from '../Sponsorslide/sponsorslide';
import HomeInfoContent from '../homeInfoContent';
import Contactus from '../Contactus/Contactus';
import Footer from '../Footer/Footer';

function Home() {
  return (
   <>
       <HomeRegImg/>
       <Sponsers/>
       <HomeInfoContent/>
       <Speakers/>
       <Contactus/>
       <Footer/>
   </>
  )
}

export default Home
