import React from 'react'
import Container from './Container'
let date=new Date()

const Footer = () => {
  return (
    <footer className=' bg-black text-white mt-auto'>
     <Container>
     <div className='p-5 flex justify-center'>
     <p className='space-x-2'> @ <span>{date.getFullYear()}</span> <a href="" className=' underline'>MMS IT.</a><span>All rights reserved</span></p>
      </div>

     </Container>
     
    </footer>
  )
}

export default Footer
