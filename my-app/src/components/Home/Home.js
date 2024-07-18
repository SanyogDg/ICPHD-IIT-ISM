import React, { useEffect } from 'react'
import HomeRegImg from '../homeRegImg'
import 'react-router-dom'
import Speakers from '../Speakerslide/speakerslide';
import Sponsers from '../Sponsorslide/sponsorslide';
import HomeInfoContent from '../homeInfoContent';
import Contactus from '../Contactus/Contactus';
import Footer from '../Footer/Footer';
import Timeline from '../Schedule/Timeline';



function Home() {
  
  return (
   <>
  
  
      <HomeRegImg />
      {/* <Speakers /> */}
      <Timeline />
      <HomeInfoContent />
      <Sponsers />
      <Contactus />
    
   
       
   </>
  )
}

export default Home
