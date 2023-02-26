import React from "react";
import Header from "./components/header/header";
import Scroll from "./components/scroll/scroll"
import Hero from "./components/Hero/hero";

export default function App() {
  return (
    <div className="bg-yellow-300">
      <Header />
      <Hero />
      <Scroll />
    </div>
  );
}
