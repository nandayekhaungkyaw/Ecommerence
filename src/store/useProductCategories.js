import { create } from "zustand";


const useProductCategories = create((set) => ({
   categories : [
    { id: 0, name: "All", current: true },
    { id: 1, name: "electronics", current: false },
    { id: 2, name: "jewelery", current: false },
    { id: 3, name: "men's clothing", current: false },
    { id: 4, name: "women's clothing", current: false },
  ],
  changeProductCategories:(id) => set((state) => ({categories:state.categories.map((el)=>el.id===id ? {...el,current:true}:{...el,current:false})})),


}))
export default useProductCategories;