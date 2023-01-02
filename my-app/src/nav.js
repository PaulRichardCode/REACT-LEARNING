import React from "react";
import reactLogo from "./images/react-logo.png";

export default function Nav() {
  return (
    <nav className="react-nav">
      <div className="logo">
        <img src={reactLogo} width="40px" height="40px" />
        <h1 className="heading">ReactFacts</h1>
      </div>
      <h2>React Course - Project 1</h2>
    </nav>
  );
}
