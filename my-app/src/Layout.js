import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navabar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GridLoader from "react-spinners/GridLoader";
import Banner from "./components/banner/Banner";
import { contactRef } from "./components/Home/contactRef";

function Layout() {
  const [loading, setLoading] = useState(false);
  const [stylecenter, setStyle] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setStyle(true);
    setTimeout(() => {
      setLoading(false);
      setStyle(false);
    }, 1000);
  }, []);

  const centeringStyle = stylecenter
    ? {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }
    : {};

  return (
    <div style={centeringStyle}>
      <>
        {loading ? (
          <GridLoader
            color="#0e36ff"
            margin={2}
            size={25}
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
          />
        ) : (
          <>
            {/* <img src='./poster.png' className='h-[250px] w-full'/> */}
            {/* <Banner /> */}
            <img 
              src="./banner.jpg" 
              alt="Banner" 
              className="w-[100vw] h-auto object-cover"
            />
            <Navabar contactRef={contactRef} className="relative"/>
            <Outlet className="absolute"/>
            <Footer />
          </>
        )}
      </>
    </div>
  );
}

export default Layout;
