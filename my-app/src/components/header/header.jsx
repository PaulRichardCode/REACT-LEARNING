import React from "react";
import css from "./header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "";

export default function header() {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="logo" />
        <span>amazon</span>
      </div>

      <div className={css.rightside}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>

        <input type="text" id="search" className={css.search} />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
}
