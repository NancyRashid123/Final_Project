import React from 'react'
import NavBar from '../navBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import MobileMenu from '../mobileMenu/MobileMenu'

export default function Layout() {
  return (
    <div>
      <MobileMenu/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
