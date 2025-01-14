import React from 'react'

const Rating = ({rate}) => {
    let length=5;
    const numbers=Array.from({length},(_,i) =>i+1);
   
  

    let currentRate=rate.toFixed(0)

    const stars=[]

    for(let i=1; i<= 5 ; i++){
        

      stars.push(
          
      <svg xmlns="http://www.w3.org/2000/svg" key={i} fill='none' className={` ${ i <=currentRate &&  'fill-yellow-400'}  size-6 stroke-yellow-300`} viewBox="0 0 24 24" strokeWidth={1.5} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    
  
      )}


  return (
    <div className='flex flex-row gap-2 mt-auto'>
     {   numbers.map((num)=> (
          <svg xmlns="http://www.w3.org/2000/svg" key={num} fill='none' className={` ${ num <=currentRate &&  'fill-yellow-400'}  size-6 stroke-yellow-300`} viewBox="0 0 24 24" strokeWidth={1.5} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>

    ) )}
    </div>

  )
}

export default Rating
