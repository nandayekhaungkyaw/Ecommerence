import React from 'react'
import useProduct from '../store/useProduct'
import useAddedCart from '../store/useAddedCart'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

const Card = ({card:{id,productId,quantity}}) => {
    const {productArray}=useProduct()
    const{increase,decrease,deletProduct}=useAddedCart();
    const product=productArray.find((el) =>el.id===productId )
    const cost=product.price*quantity
    console.log(product)

     function increaseHandler(){
        increase(productId)
     }
     function decreaseHandler(){
        if( quantity>1){
            decrease(productId)

        }else{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor:"#04ff00" ,
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    deletProduct(productId)
                    toast.success("deleted successfully")
                }else{
                    toast('Good Job!.That is popular item', {
                        icon: '👏',
                      });
                }
              });
            

        };

      
     }
  return (
    

    <section className='w-full border items-center border-black px-6 py-2 grid grid-cols-6'>
        <div className='col-span-1'>
            <img src={product.image} className='h-20' alt="" />
        </div>
        <div className='col-span-3'>
            <p>{product.title}</p>
            <p>Price <span>$({product.price})</span></p>
        </div>
        <div className='col-span-1 flex flex-row gap-2'>
            <button onClick={decreaseHandler} className=' flex bg-slate-900 text-white text-center items-center px-2 py-0.2'>-</button>
            <p>{quantity}</p>
            <button onClick={increaseHandler} className=' flex bg-slate-900 text-white text-center items-center px-2 py-0.2'>+</button>

        </div>
        <div className='col-span-1 text-end'>
            <p className='font-bold text-xl'>${cost}</p>
        </div>
      
    </section>
  )
}

export default Card
