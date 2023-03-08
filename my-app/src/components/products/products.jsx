import React, { useState } from "react";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";

export default function Products() {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  return (
    <div className="container px-10">
      <img src={Plane} alt="plane" className="w-24 mx-auto" />
      <h1 className="text-center text-2xl font-bold ">Our Featured Products</h1>

      <div className="flex py-10">
        <ul className="basis-1/5 flex flex-col gap-10 font-medium text-xl ">
          <li className="hover:text-pink-500 transition-colors cursor-pointer">
            All
          </li>
          <li className="hover:text-pink-500 transition-colors cursor-pointer">
            Skin Care
          </li>
          <li className="hover:text-pink-500 transition-colors cursor-pointer">
            Conditioners
          </li>
          <li className="hover:text-pink-500 cursor-pointer">Foundations</li>
        </ul>

        <div className="basis-4/5 flex gap-3 flex-wrap overflow-y-scroll h-96 ">
          {MenuProducts.map((Products) => {
            return (
              <div className=" w-48 relative bg-white flex h-32 justify-between overflow-hidden p-3 rounded-xl">
                {/* Text Only */}
                <div className="flex flex-col items-stretch justify-between">
                  <div className="mb-1">
                    <span className="block font-bold ">{Products.name}</span>
                    <span className="block text-xs leading-3">
                      {Products.detail}
                    </span>
                  </div>
                  <span className="text-2xl font-bold">{Products.price}$</span>
                  <div className=" border border-black w-20 rounded-2xl text-xs text-center py-1 cursor-pointer px-1">
                    Shop Now
                  </div>
                </div>
                {/* Image Only */}
                <img
                  src={Products.img}
                  alt=""
                  classname="w-12 h-16 absolute rotate-45"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
