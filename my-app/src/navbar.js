import React from "react";
import Airbnb from "./images/airbnb.svg";

export default function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={Airbnb} alt="Airbnb logo" className="airbnb" />
      </div>
    </nav>
  );
}
