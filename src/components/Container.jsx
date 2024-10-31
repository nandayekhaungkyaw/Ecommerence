import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' w-full mx-4 md:w-[720px] lg:w-[1200px]  md:mx-auto'>
       {children}
      
    </div>
  )
}

export default Container
