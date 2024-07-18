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
<<<<<<< HEAD
    <>
      <div className='min-h-screen min-w-screen'>

       <HomeRegImg/>
       <Speakers/>
       <Timeline/>
       <HomeInfoContent/>
       <Sponsers/>
       <Contactus/>
=======
   <>
  
  
      <HomeRegImg />
      {/* <Speakers /> */}
      <Timeline />
      <HomeInfoContent />
      <Sponsers />
      <Contactus />
    
   
>>>>>>> a11e263d18a26aebc8e42d5ca4f79ce9bf8fdacb
       
      </div>
   </>
  )
}

export default Home
