import React from 'react'
import { Outlet } from 'react-router-dom'
import Navabar from './components/Navbar/Navbar'

function Layout() {
  return (
    <div>
       <>
   <Navabar/>
  <Outlet />
    </>
    </div>
  )
}

export default Layout
