import React from "react";
import Header from "./components/header/header";
import Scroll from "./components/scroll/scroll";
import Hero from "./components/Hero/hero";
import { ProductsData } from "./data/products";

export default function App() {
  const data = ProductsData.map((prod) => {
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
    <div className="bg-yellow-300">
      <Header />
      <Hero />
      <div>{data}</div>
    </div>
  );
}
