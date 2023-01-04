import React from "react";
import FirstImg from "./images/pro1.jpg";

export default function Card() {
  return (
    <main className="card">
      <img src={FirstImg} alt="portrait" className="pro1" />
      <div className="card-stats">
        <p>💖</p>
        <span>5.0</span>
        <span>(6) * </span>
        <span>USA</span>
      </div>
      <p>Life lessons with richie Zafares</p>
      <p>From $136 / person</p>
    </main>
  );
}
