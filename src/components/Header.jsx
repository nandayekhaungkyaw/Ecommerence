import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import useAddedCart from '../store/useAddedCart'



const Header = () => {
  const {addedProducts}=useAddedCart()
  return (
    <header>
      <Container>
      <div className='p-5 flex flex-row  items-center justify-between'>
     <Link to={'./'} className='font-bold text-3xl '>Online Shop</Link>
     <Link to={'./my-cart'} className='border border-black px-6 py-3 relative '>
      <p className='text-xl font-semibold'>My Cart</p>
      <span className='absolute text-sm border px-3 py-1 -translate-y-1/2  bg-red-700 text-white top-0 right-0 translate-x-1/2'>{addedProducts.length}</span>
     </Link >
     </div>

      </Container>
    
    


   
    
    </header>
  )
}

export default Header
