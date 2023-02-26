import React from "react";
import { HiShoppingBag } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import HeroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="container mx-auto flex px-4 h-96 justify-around">
      {/* Left hand side */}
      <div className="basis-1/6 mr-40">
        <span className="block font-bold text-2xl text-gray-800 uppercase py-7">
          skin protection cream
        </span>

        <div>
          <span className="block text-4xl font-extrabold leading-normal pt-14 pb-4">
            Trendy Collection
          </span>
          <span className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            officiis voluptates soluta omnis consectetur. Explicabo dignissimos
          </span>
        </div>
      </div>
      {/* Middle side here image */}
      <div className="basis-1/2 ">
        <div className=" bg-gradient-to-b from-cyan-300 to-cyan-200 rounded-full left-50% top-50% absolute">
          <img src={HeroImg} alt="girl" width={500} className="relative" />
        </div>
        <div className="relative z-40 flex items-center top-80 left-32 justify-center">
          <div className="border-4 p-2 border-gray-800 rounded-full mx-4 cursor-pointer bg-white">
            <HiShoppingBag className=" w-8 h-8 inline-block" />
          </div>

          <div className="flex px-3 rounded-lg items-center justify-between w-40 bg-white">
            <span className="text-gray-600 text-sm font-medium py-2">
              Best Signup
              <br /> offers
            </span>
            <div className="border border-gray-300 p-2 cursor-pointer rounded-full">
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}'
      <div className="basis-1/6 flex flex-col justify-between py-6">
        <div>
          <span className="block text-4xl font-extrabold py-2">1.5m</span>
          <span className="font-medium text-gray-800">Monthly Traffic</span>
        </div>
        <div>
          <span className="block text-4xl font-extrabold py-2">100k</span>
          <span className="font-medium text-gray-800">Happy customers</span>
        </div>
      </div>
    </div>
  );
}
