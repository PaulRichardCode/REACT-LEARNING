import React, { useState } from "react";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";

export default function products() {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  return (
    <div>
      <img src={Plane} alt="plane" />
      <h1>Our Featured Products</h1>

      <div>
        <ul>
          <li>All</li>
          <li>Skin Care</li>
          <li>Conditioners</li>
          <li>Foundations</li>
        </ul>

        <div></div>
      </div>
    </div>
  );
}
