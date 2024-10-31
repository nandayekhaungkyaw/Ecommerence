import React from 'react'
import CategoryBtn from './CategoryBtn';
import ProductSection from './ProductSection';
import Container from './Container';
import useProductCategories from '../store/useProductCategories';

const CategorySection = () => {
    const text = "Product Categories";
  const {categories}=useProductCategories()

  return (
    <section id='category-section' className='m-[20px]'>
      <Container>
        <p className='text-2xl text-gray-500'>{text}</p>
      <div className='flex flex-row hide-scrollbar overflow-scroll '>
       
        {categories.map((category)=>(
           <CategoryBtn key={category.id} categoryId={category.id} categoryName={category.name} current={category.current} />
        ))}
      </div>
      </Container>
    </section>
    
  )
}

export default CategorySection
