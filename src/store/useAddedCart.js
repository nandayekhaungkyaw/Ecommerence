import { create } from "zustand";
import useProduct from "./useProduct";



const useAddedCart=create((set) => ({
addedProducts :[   {
    id:1,
    productId:5,
    quantity:3,
   
},
{
    id:2,
    productId:4,
    quantity:3,
  
},
],
increase:(id) => set((state) =>({
    addedProducts:state.addedProducts.map((el)=>el.productId==id ?{...el,quantity:el.quantity+1}:el)
}) ),

decrease:(id) => set((state) => ({
    addedProducts:state.addedProducts.map((el)=>el.productId==id ? {...el,quantity:el.quantity-1} : el)

})),
deletProduct:(id) => set((state) => ({
    addedProducts:[...state.addedProducts.filter((el)=>el.productId !=id )]
})),

toAddProduct:(currentProduct) => set((state) => ({
    addedProducts:[...state.addedProducts,currentProduct]
})),


}));

export default useAddedCart