import React from 'react'

import HomeRegImg from '../homeRegImg'
import 'react-router-dom'
import Speakers from '../Speakerslide/speakerslide';
import Sponsers from '../Sponsorslide/sponsorslide';
import HomeInfoContent from '../homeInfoContent';

function Home() {
  return (
   <>
       <HomeRegImg/>
        <Sponsers/>
       <Speakers/>
       <HomeInfoContent/>
   </>
  )
}

export default Home
