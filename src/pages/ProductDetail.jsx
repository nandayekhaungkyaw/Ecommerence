import React from "react";
import { useParams } from "react-router-dom";

import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "./Breadcrumb";
import useProduct from "../store/useProduct";
import useAddedCart from "../store/useAddedCart";

const ProductDetail = () => {
  let { slug } = useParams();
  const { productArray } = useProduct();
  console.log(slug)
  let currentProduct = productArray.find((product) => product.slug == slug);
  console.log(currentProduct);
  const { addedProducts, toAddProduct } = useAddedCart();

  function toAddProductHandler(event) {
    event.stopPropagation();

    const newcart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    toAddProduct(newcart);
   
  }

  return (
    <Container>
      <Breadcrumb currentPage="ProductDetail" />
      <div className="border border-black grid-cols-1 gap-2 md:grid-cols-2 grid h-fit md:py-10 p-5 md:px-10">
        <div className="">
          <img
            src={currentProduct.image}
            className="w-[150px]  md:w-1/2 md:mx-auto "
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center">
          <h2 className=" font-bold text-3xl mt-auto">
            {currentProduct.title}
          </h2>
          <p className="bg-slate-300  inline-block rounded-md px-4 py-1">
            {currentProduct.category}
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            quia. Reicibore atque harum, reprehenderit, vel saepe natus
            distinctio.
          </p>
          <Rating rate={currentProduct.rating.rate} />
          <div className="flex  justify-between w-full">
            <p>
              <span>Price </span> <span> $({currentProduct.price})</span>
            </p>
            {addedProducts.find(
              (card) => card.productId == currentProduct.id
            ) ? (
              <button className="border border-black px-4 bg-black text-white py-1">
                Added
              </button>
            ) : (
              <button
                onClick={toAddProductHandler}
                className="border border-black px-4 py-1"
              >
                Add Cart
              </button>
            )}
            ,
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
