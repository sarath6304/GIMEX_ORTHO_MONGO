import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
// import RSB from './Booking_button'
export default function Layout() {
  return (
  <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
