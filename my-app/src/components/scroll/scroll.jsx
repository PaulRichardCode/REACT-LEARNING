import React from "react";
import { SliderProducts } from "../../data/products";

export default function scroller() {
  return (
    <div className="py-32 flex items-center justify-center">
      <div className="flex container w-72 h-52 bg-white rounded-3xl p-8 border-black">
        <div>
          <h3 className="text-2xl font-bold">SKIN</h3>
          <span className="block leading-3">mommi</span>
          <h3>$25</h3>
          <p>Indian hemp</p>
        </div>
        <div>
          <img src="#" alt="bro" />
        </div>
      </div>
    </div>
  );
}
