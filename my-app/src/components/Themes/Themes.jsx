import React from 'react'
import { FaOilWell } from "react-icons/fa6";
import { GiOilPump } from "react-icons/gi";
import '../Themes/Themes.css';
import Footer from '../Footer/Footer';
import ThemedSection from './ThemedSection';
import img from '../../images/oil-rig-2191711_1920.jpg'
import drilling from '../../images/themes/drilling.jpg'
export default function Themes() {
    return (
        <div className='themes-container'>
      <ThemedSection
  image={img}
  heading="G & G Exploration"
  reverse={false}
/>
<ThemedSection
  image={img}
  heading="Drilling and Production Technologies"
  reverse={true}
/>
<ThemedSection
  image={img}
  heading="Geomechanics & Hydraulic Fracturing"
  reverse={false}
/>
<ThemedSection
  image={img}
  heading="Unconventional Hydrocarbon Resources"
  reverse={true}
/>
<ThemedSection
  image={img}
  heading="Carbon Capture, Utilization and Storage (CCUS)"
  reverse={false}
/>
<ThemedSection
  image={img}
  heading="Data Analytics and Artificial Intelligence in Energy Industry"
  reverse={true}
/>
<ThemedSection
  image={img}
  heading="Hydrogen Production, Storage and Transportation"
  reverse={false}
/>
<ThemedSection
  image={img}
  heading="Energy Transition and Net Zero Policy"
  reverse={true}
/>
<ThemedSection
  image={img}
  heading="Resource and Reserve Management"
  reverse={false}
/>
<ThemedSection
  image={img}
  heading="Reservoir Simulations"
  reverse={true}
/>
<ThemedSection
  image={img}
  heading="HSE in Oil and Gas Industry"
  reverse={false}
/>
<ThemedSection
  image={img}
  heading="Enhanced Oil Recovery"
  reverse={true}
/>
<ThemedSection
  image={img}
  heading="Strategic Reserve Management"
  reverse={false}
/>
<ThemedSection
  image={img}
  heading="Hydrocarbon Policies"
  reverse={true}
/>
<ThemedSection
  image={img}
  heading="Geothermal Energy"
  reverse={false}
/>
<ThemedSection
  image={img}
  heading="Pipeline and Transportation"
  reverse={true}
/>


        </div>
    )
}
