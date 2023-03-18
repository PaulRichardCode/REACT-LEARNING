import React from "react";
import Testimony from "../../data/testimonials";
import Hero from "../../assets/testimonialHero.png";

const Testimonial = () => {
  return (
    <div className="flex justify-between items-end w-11/12 mx-auto py-10">
      <div className="basis-2/6 ">
        <div className="w-3/4  uppercase">
          <h1 className="text-3xl py-5 font-bold">Top Rated</h1>
          <p className="text-xs font-medium">
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </p>
        </div>
      </div>

      <img src={Hero} alt="hero" className="basis-1/6 w-72" />
      <div className="basis-2/6 ">
        <div className="text-right uppercase">
          <h2 className="text-3xl pb-8 font-bold">100K</h2>
          <p className="text-xs font-medium">Happy Customers with us</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
