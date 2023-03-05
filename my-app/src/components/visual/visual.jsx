import React from "react";
import Shade from "../../assets/shade.png";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";
import ReactCompareImage from "react-compare-image";
const visual = () => {
  return (
    <div className="container mx-auto w-3/4 text-center flex justify-around">
      <div className="w-1/3 mx-auto  text-left ">
        <span className="block text-3xl font-bold">VIRTUAL TRY-ON</span>
        <span className="block text-2xl w-60 py-10 uppercase">
          Never Buy The Wrong Shade Again
        </span>
        <span className="block text-2xl font-bold"> Try NOW!</span>
        <img src={Shade} alt="Shade" className="w-32" />
      </div>
      <div className="w-1/2">
        <ReactCompareImage leftImage={Before} rightImage={After} />
      </div>
    </div>
  );
};

export default visual;
