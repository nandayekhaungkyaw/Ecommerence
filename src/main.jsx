import { createElement } from 'react'
import './index.css'
const root=document.querySelector('#root')
import { createRoot } from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from '../router/router';
const clothes = [
    "eletronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
   
  ];





//   console.log(clothes.map((clothe)=>{
//     console.log(clothe);
// }));


// const app=createElement('p',null,'Product categories','helloheloo',clothes.map((clothe)=>{
//     createElement('div',null,clothe)
// }))
// console.log(app);
// console.log(root);
createRoot(root).render(<RouterProvider router={router} />)
