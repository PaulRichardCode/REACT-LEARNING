import React from "react";
import { HiShoppingBag } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import HeroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 bg-slate-300">
      {/* Left hand side */}
      <div>
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
      <div>
        <div></div>
        <img src={HeroImg} alt="girl" width={600} />
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
        <div>
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
