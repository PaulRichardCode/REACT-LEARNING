import React from "react";
import css from "./hero.module.css";

export default function Hero() {
  return (
    <div className={css.container}>
      {/* Left hand side */}

      <div className={css.h_sides}>
        <span>skin protection cream</span>

        <div className={css.text2}>
          <span>Trend: Colle Lorem ipsum dolor sit amet, consectection</span>
          <span>etur adipisicing elit. Eos.</span>
        </div>
      </div>

      {/* Middle side here image */}

      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}> </div>
      </div>
    </div>
  );
}
