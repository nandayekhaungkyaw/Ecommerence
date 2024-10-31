import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({currentPage}) => {
  return (
    <div className='flex flex-row gap-4 w-full'>
        <Link to='/' className=' text-gray-600' >Home</Link>
        <p>/ </p>
        <Link className='font-bold'>{currentPage}</Link>
      
    </div>
  )
}

export default Breadcrumb
