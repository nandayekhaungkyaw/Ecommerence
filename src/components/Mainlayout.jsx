import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Container from './Container'
import { Toaster } from 'react-hot-toast'

const Mainlayout = () => {
  return (
    <>
    <Header/>
    <Container/>
    <Outlet/>
    <Footer/>
    <Toaster  position="top-center"
  reverseOrder={false}/>
      
    </>
  )
}

export default Mainlayout
