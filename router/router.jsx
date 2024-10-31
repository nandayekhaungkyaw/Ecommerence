import { createBrowserRouter } from "react-router-dom";
import Home from '../src/pages/Home';
import AboutUs from '../src/pages/AboutUs';
import MyCart from '../src/pages/MyCart';
import ProductDetail from '../src/pages/ProductDetail';
import Mainlayout from "../src/components/Mainlayout";
import ErrorPage from "../src/pages/ErrorPage";

const router = createBrowserRouter([
 {
    path:'/',
    element:<Mainlayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path: "/",
            element:<Home/>
          },
          {
            path:"about-us", 
            element:<AboutUs/>
          },
          {
            path:"my-cart", 
            element:<MyCart/>
          },
          {
            path:"product-detail/:slug", 
            element:<ProductDetail/>
          },
    ]
 }
  ]);

  export default router