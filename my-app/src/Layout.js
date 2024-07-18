import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navabar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import GridLoader from 'react-spinners/GridLoader';



function Layout() {
  const [loading, setLoading] = useState(false);
  const [stylecenter, setStyle] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setStyle(true);
    setTimeout(()=>{
      setLoading(false)
      setStyle(false);
    },3000)
  },[])

  const centeringStyle = stylecenter ? {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  } : {};

  return (
<<<<<<< HEAD
    <div className='min-h-screen flex flex-col'>
       <>
       <RouteWatcher />
=======
    <div style={centeringStyle}>
      <>
      {loading ? (
          <GridLoader
          color="#0e36ff"
          margin={2}
          size={25}
          cssOverride={{
            display: 'block',
            margin: '0 auto',
          }}
        />) :
  (
    <>
>>>>>>> a11e263d18a26aebc8e42d5ca4f79ce9bf8fdacb
   <Navabar/>
  <Outlet />
  <Footer/>
  </>
  )
}
    </>
    </div>
  )
}

export default Layout
