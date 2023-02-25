import React from "react";
import css from "./header.module.css";
import Logo from "../../assets/logo.png";
import { BsCart4 } from "react-icons/bs";

export default function header() {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="logo" />
        <span>GlowsByJimi</span>
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

        <input
          type="text"
          id="search"
          placeholder="Search"
          className={css.search}
        />
        <BsCart4 className={css.cart} />
      </div>
    </div>
  );
}
