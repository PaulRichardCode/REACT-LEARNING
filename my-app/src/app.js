import React from "react";
import Header from "./components/header/header";
import Scroll from "./components/scroll/scroll";
import Hero from "./components/Hero/hero";
import { SliderProducts } from "./data/products";
import "./App.css";
import Visual from "./components/visual/visual";
import Products from "./components/products/products";
import Testimonial from "./components/testimonial/testimonial";

export default function App() {
  const data = SliderProducts.map((prod) => {
    return (
      <Scroll
        img={prod.img}
        name={prod.name}
        detail={prod.detail}
        price={prod.price}
        type={prod.type}
      />
    );
  });

  return (
    <div>
      <Header />
      <Hero />
      <div className="mt-40 mb-24 flex justify-center">{data}</div>
      <Visual />
      <Products />
      <Testimonial />
    </div>
  );
}
