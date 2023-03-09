import React from "react";
import Testimony from "../../data/testimonials";
import Hero from "../../assets/testimonialHero.png";

const Testimonial = () => {
  return (
    <div className="flex justify-between items-end w-11/12 mx-auto py-10">
      <div className="basis-2/6">
        <h1>Top Rated</h1>
        <p>
          Seedily say has suitable disposal and boy. Exercise joy man children
          rejoiced.
        </p>
      </div>

      <img src={Hero} alt="hero" className="basis-2/6 w-96" />

      <div className="basis-2/6">
        <h2>100K</h2>
        <p>Happy Customers with us</p>
      </div>
    </div>
  );
};

export default Testimonial;
