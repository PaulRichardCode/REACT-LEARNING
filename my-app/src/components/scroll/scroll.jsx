import React from "react";
import { SliderProducts } from "../../data/products";

export default function scroller() {
  const products = SliderProducts.map((produce) => {
    produce.name;
  });

  return <div className="py-32">{products}</div>;
}
