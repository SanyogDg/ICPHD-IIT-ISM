import React, { useEffect, useRef } from 'react'
import HomeRegImg from '../homeRegImg'
import 'react-router-dom'
import Speakers from '../Speakerslide/speakerslide';
import Sponsers from '../Sponsorslide/sponsorslide';
import HomeInfoContent from '../homeInfoContent';
import Contactus from '../Contactus/Contactus';
import Footer from '../Footer/Footer';
import Timeline from '../Schedule/Timeline';
import { contactRef } from './contactRef';


function Home() {
  return (
    <>


      <HomeRegImg />
      <Sponsers />
      <Speakers />
      <HomeInfoContent />
      <Timeline />
      <div ref={contactRef} >
        <Contactus />
      </div>




    </>
  )
}

export default Home
