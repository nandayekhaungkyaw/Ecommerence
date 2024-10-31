import React from 'react'
import useProductCategories from '../store/useProductCategories'

const CategoryBtn = ({categoryName,current,categoryId}) => {


  const {changeProductCategories}=useProductCategories();
  function productCategoriesHandler (){
    changeProductCategories(categoryId)
    console.log(current)
    console.log(categoryId)

  }
  return (
    <button onClick={productCategoriesHandler} className={`  ${current &&  'bg-black text-white'}  border mt-4 text-nowrap border-black px-4 py-2 me-[12px]`}>{categoryName}</button>

  )
}

export default CategoryBtn
