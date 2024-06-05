import React from 'react'
import { Outlet } from 'react-router-dom'
import Navabar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import RouteWatcher from './components/RouteWatcher'

function Layout() {
  return (
    <div>
       <>
       <RouteWatcher />
   <Navabar/>
  <Outlet />
  <Footer/>
    </>
    </div>
  )
}

export default Layout
