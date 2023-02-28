import React from "react";
import img from "../../assets/img1.png";

export default function scroller(props) {
  return (
    <div className="py-32 flex items-center justify-center">
      <div className="flex container w-72 h-56 bg-yellow-50 rounded-3xl justify-around border-black cursor-pointer">
        <div className="p-5">
          <h3 className="text-3xl font-bold">{props.name}</h3>
          <span className="block">{props.detail}</span>
          <h3 className="py-6 font-extrabold text-4xl">{props.price}</h3>
          <p className="border-2 border-black/50 p-2 text-xs rounded-2xl">
            {props.type}
          </p>
        </div>
        <div>
          <img src={props.img} alt="bro" className="-rotate-12 h-60" />
        </div>
      </div>
    </div>
  );
}

console.log(console);
