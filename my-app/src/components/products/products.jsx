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
        <ul className="basis-1/3 flex flex-col gap-10 font-medium text-xl ">
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

        <div className="basis-2/3">
          {MenuProducts.map((Products) => {
            return (
              <div>
                {/* Text Only */}
                <div>
                  <div>
                    <span className="block text-2xl font-semibold leading-10">
                      {Products.name}
                    </span>
                    <span className="block font-normal text-base ">
                      {Products.detail}
                    </span>
                  </div>
                  <span className="text-3xl font-bold">{Products.price}$</span>
                  <div className=" border border-black">Shop Now</div>
                </div>
                {/* Image Only */}
                {/*  <img src={Products.img} alt="" /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
