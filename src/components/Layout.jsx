import React from 'react'
import Footer from './Footer'
import ProductDetails from './Product_Details'
import { Outlet } from 'react-router-dom'
import Home_page from './Home_page'
import PromoSection from './Home_Promo_Section'
import Navbar from './NavBar'
import EditProfileForm from './Edit_Profile'
import FAQPage from './FAQSection'
import AboutUsPage from './About'
import Contact from './Contact'
import ExploreCategories from './Explore_cats'
import ManageProfile from './Blogs'
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
