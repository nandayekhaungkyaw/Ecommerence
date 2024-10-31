import React from 'react'
import ProductCard from './ProductCard'


import Container from './Container'
import useProduct from '../store/useProduct'
import useProductCategories from '../store/useProductCategories'

const ProductSection = () => {
  const {categories}=useProductCategories()


  
const {productArray}=useProduct()
let currentProductArray=   productArray.filter((el)=> categories.find((el)=>el.current==true).name=="All" || el.category===categories.find((el)=>el.current==true).name)
console.log(currentProductArray)

  return (
    <div className='p-5 space-y-5 '>
         <Container>
         <p className='text-2xl text-gray-500 '>
            Available Product Lists
         </p>
         <div className='grid  grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-4'>
        
        
         {currentProductArray.map((product)=>(


             <ProductCard key={product.id} product={ product} />
            

         ))}

         </div>

         </Container>
        
    </div>
  )
}

export default ProductSection
