import React from 'react'
import { FaOilWell } from "react-icons/fa6";
import { GiOilPump } from "react-icons/gi";
import '../Themes/Themes.css';
import Footer from '../Footer/Footer';
import ThemedSection from './ThemedSection';
import img from '../../images/oil-rig-2191711_1920.jpg'
import drilling from '../../images/themes/drilling.webp'
import hydrocarbon from '../../images/themes/hydrocarbon.webp'
import carbonCapture from '../../images/themes/carbon-capture.webp'
import ai from '../../images/themes/ai.png'
import hydrogen from '../../images/themes/hydrogen.jpg'
import htransition from '../../images/themes/h-transition.png'
import reserve from '../../images/themes/reserve.jpg'
import simulation from '../../images/themes/reservoir.jpg'
import health from '../../images/themes/health.png'
import EOR from '../../images/themes/EOR.jpg'
import geothermal from '../../images/themes/geothermal.jpg'
import pipeline from '../../images/themes/pipeline.jpg'
import Strategic from '../../images/themes/strategicReserve.jpg'
import policy from '../../images/themes/policy.jpg'
import gpe from '../../images/themes/gpe.jpeg'
import fracturing from '../../images/themes/fracturing.jpg'

export default function Themes() {
    return (
      <>
        <div className='themes-container'>
      <ThemedSection
  image={gpe}
  heading="G & G Exploration"
  reverse={false}
/>
<ThemedSection
  image={drilling}
  heading="Drilling and Production Technologies"
  reverse={true}
/>
<ThemedSection
  image={fracturing}
  heading="Geomechanics & Hydraulic Fracturing"
  reverse={false}
/>
<ThemedSection
  image={hydrocarbon}
  heading="Unconventional Hydrocarbon Resources"
  reverse={true}
/>
<ThemedSection
  image={carbonCapture}
  heading="Carbon Capture, Utilization and Storage (CCUS)"
  reverse={false}
/>
<ThemedSection
  image={ai}
  heading="Data Analytics and Artificial Intelligence in Energy Industry"
  reverse={true}
/>
<ThemedSection
  image={hydrogen}
  heading="Hydrogen Production, Storage and Transportation"
  reverse={false}
/>
<ThemedSection
  image={htransition}
  heading="Energy Transition and Net Zero Policy"
  reverse={true}
/>
<ThemedSection
  image={reserve}
  heading="Resource and Reserve Management"
  reverse={false}
/>
<ThemedSection
  image={simulation}
  heading="Reservoir Simulations"
  reverse={true}
/>
<ThemedSection
  image={health}
  heading="HSE in Oil and Gas Industry"
  reverse={false}
/>
<ThemedSection
  image={EOR}
  heading="Enhanced Oil Recovery"
  reverse={true}
/>
<ThemedSection
  image={Strategic}
  heading="Strategic Reserve Management"
  reverse={false}
/>
<ThemedSection
  image={policy}
  heading="Hydrocarbon Policies"
  reverse={true}
/>
<ThemedSection
  image={geothermal}
  heading="Geothermal Energy"
  reverse={false}
/>
<ThemedSection
  image={pipeline}
  heading="Pipeline and Transportation"
  reverse={true}
/>


        </div>

        </>
    )
}
