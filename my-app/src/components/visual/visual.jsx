import React from "react";
import Shade from "../../assets/shade.png";

const visual = () => {
  return (
    <div className="container mx-auto w-3/4 text-center flex justify-around">
      <div className="w-1/3 bg-red-400 text-left ">
        <span className="block text-3xl font-bold">VIRTUAL TRY-ON</span>
        <span className="block text-2xl w-60 py-10 uppercase">
          Never Buy The Wrong Shade Again
        </span>
        <span className="block text-2xl font-bold"> Try NOW!</span>
        <img src={Shade} alt="Shade" />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default visual;
