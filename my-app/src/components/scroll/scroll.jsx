import React from "react";
import img from "../../assets/img1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ProductsData } from "../../data/products";

export default function scroller() {
  return (
    <div className="s-container">
      <Swiper
        // install Swiper modules
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        {ProductsData.map((slide) => {
          <SwiperSlide>
            <div className="py-32 flex items-center justify-center">
              <div className="flex container w-72 h-56 bg-yellow-50 rounded-3xl justify-around border-black cursor-pointer">
                <div className="p-5">
                  <h3 className="text-3xl font-bold">baddest</h3>
                  <span className="block">{slide.detail}</span>
                  <h3 className="py-6 font-extrabold text-4xl">
                    {slide.price}
                  </h3>
                  <p className="border-2 border-black/50 p-2 text-xs rounded-2xl">
                    {slide.type}
                  </p>
                </div>

                <img src={slide.img} alt="bro" className="-rotate-12 h-60" />
              </div>
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
      );
    </div>
  );
}

{
  /*export default () => {
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
};*/
}
