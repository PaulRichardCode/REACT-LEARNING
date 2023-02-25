import React from "react";
import { HiShoppingBag } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import HeroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="container mx-auto flex px-4 bg-yellow-300">
      {/* Left hand side */}
      <div className="">
        <span>skin protection cream</span>

        <div>
          <span>Trendy collections </span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            officiis voluptates soluta omnis consectetur. Explicabo dignissimos
          </span>
        </div>
      </div>
      {/* Middle side here image */}
      <div className="basis-1/2">
        <div className="w-96 h-96 bg-gradient-to-b from-cyan-600 to-violet-400 rounded-full left-50% top-50% absolute"></div>
        <img src={HeroImg} alt="girl" width={600} className="relative" />
        <div>
          <HiShoppingBag />

          <div>
            <span>Best Signup offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}'
      <div>
        <div className="">
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div>
          <span>100k</span>
          <span>Happy customers</span>
        </div>
      </div>
    </div>
  );
}
