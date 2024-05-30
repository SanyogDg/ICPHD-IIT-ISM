import React from 'react'
import { Outlet } from 'react-router-dom'
import Navabar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <div>
       <>
   <Navabar/>
  <Outlet />
  <Footer/>
    </>
    </div>
  )
}

export default Layout
