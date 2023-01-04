import React from "react";
import People from "./images/people.png";

export default function hero() {
  return (
    <div className="pics">
      <img src={People} alt="people" className="people" />
      <section className="main-header">
        <h1 className="h1ex">Online Experiences</h1>
        <p className="text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </div>
  );
}
