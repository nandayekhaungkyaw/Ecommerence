import React from 'react'
import Rating from './Rating'
import { Link, Navigate, useNavigate } from 'react-router-dom'


import useProduct from '../store/useProduct'
import useAddedCart from '../store/useAddedCart'


const ProductCard = 
({product:{id,title,price,slug,image,rating:{ rate }}}) => {

const {productArray}=useProduct()
const {addedProducts,toAddProduct}=useAddedCart()
function toAddProductHandler(event){
  event.stopPropagation()
  
  const newcart={
    id:Date.now(),
    productId:id,
    quantity:1,
  }
  toAddProduct(newcart)
  console.log("added")

}
function addedHandler(event){
  event.stopPropagation()

}
const navigate=useNavigate()
function openDetailHandle(){
  navigate(`product-detail/${slug}`)

}


  return (
   
   
       <div onClick={openDetailHandle} to={`./product-detail/${slug}`} className=' border gap-3 border-black p-5 flex flex-col items-start '>
        

        <img src={image} className=' h-40' alt="" />
        <h2 className='font-bold text-xl line-clamp-2'>{title}</h2>
      <Rating rate={rate} />
        <div className='flex flex-row justify-between  items-center w-full'>
            <span className='flex flex-row gap-1'>Price ($ <span>{price}</span> ) </span>
           {addedProducts.find((card)=>card.productId==id) ? (<button onClick={addedHandler} className='border border-black px-4 bg-black text-white py-1'>Added</button>):(  <button onClick={toAddProductHandler} className='border border-black px-4 py-1'>Add Cart</button>) },
          

        </div>
      
    </div>
      
    
  )}


export default ProductCard
