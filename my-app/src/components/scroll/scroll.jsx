import React from "react";
import { SliderProducts } from "../../data/products";

export default function scroller() {
  return (
    <div className="py-32 flex items-center justify-center">
      <div className="flex container w-72 h-56 bg-white rounded-3xl  border-black">
        <div className="p-5">
          <h3 className="text-3xl font-bold">SKIN</h3>
          <span className="block">mommi</span>
          <h3 className="py-6 font-extrabold text-4xl">25$</h3>
          <p className="border-2 border-black/50 p-2 text-xs rounded-2xl">
            Indian hemp
          </p>
        </div>
        <div>
          <img src="#" alt="bro" />
        </div>
      </div>
    </div>
  );
}
