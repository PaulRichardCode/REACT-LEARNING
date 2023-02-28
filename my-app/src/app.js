import React from "react";
import Header from "./components/header/header";
import Scroll from "./components/scroll/scroll";
import Hero from "./components/Hero/hero";
import { ProductsData } from "./data/products";

export default function App() {
  const Data = ProductsData.map((items) => {
    return (
      <Scroll
        name={items.name}
        img={items.img}
        detail={items.detail}
        price={items.price}
        type={items.type}
      />
    );
  });

  return (
    <div className="bg-yellow-300">
      <Header />
      <Hero />
      <section className="flex overflow-hidden">{Data}</section>
    </div>
  );
}
