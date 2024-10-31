import React from "react";

import Card from "./Card";

import useProduct from "../store/useProduct";
import useAddedCart from "../store/useAddedCart";
import empty from "../asset/empty1.svg";

const CardSection = () => {
  const { productArray } = useProduct();
  const { addedProducts } = useAddedCart();

  console.log(productArray);
  console.log(addedProducts);
  
  const Total = addedProducts.reduce((pv, cv) => {
    const cost =
      cv.quantity * productArray.find((el) => el.id == cv.productId).price;
    return pv + cost;
  }, 0);
  const Tax = Total * 0.05;
  const NetTotal = Total + Tax;

  return (
    <div className="flex flex-col justify-end">
      {addedProducts.length === 0 && (
        <img src={empty} className="size-40 mx-auto mt-" alt="" />
      )}

      <section className="flex flex-col gap-4">
        {addedProducts.map((Cards) => (
          <Card key={Cards.id} card={Cards} />
        ))}
      </section>
      <div className=" border-t-2 justify-end border-black mt-20 flex flex-row gap-6">
        <div className="text-lg">
          <p>Total($)</p>
          <p> {Total.toFixed(2)}</p>
        </div>
        <div className="text-xl">
          <p>$Tax(10%)</p>
          <p>{Tax.toFixed(2)}</p>
        </div>
        <div className="text-2xl font-bold">
          <p>Net Total($)</p>
          <span>{NetTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-end mt-10">
        <button className="border border-black px-4 py-1">Check out</button>
      </div>
    </div>
  );
};

export default CardSection;
