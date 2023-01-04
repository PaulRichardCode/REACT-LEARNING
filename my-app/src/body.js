import React from "react";
import FirstImg from "./images/pro1.jpg";

export default function Card() {
  return (
    <main className="card">
      <img src={FirstImg} alt="portrait" className="pro1" />
    </main>
  );
}
