import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-screen flex justify-center text-bg-red-500  items-center flex-col gap-5'>
      <img src="..\src\img\14534.png" className='h-[500px]' alt="" />
      <h2 className='font-bold text-3xl'>404</h2>
      <p className='font-medium text-xl w-[400px]'>Page Not Found. The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."</p>
      <Link to='/' className='bg-green-200 px-4 py-1 text-3xl font-bold'>Return to Home</Link>
    </div>
  )
}

export default ErrorPage
