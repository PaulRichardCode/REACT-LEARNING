import React from "react";
import img from "../../assets/img1.png";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderProducts } from "../../data/products";

export default function scroller(props) {
  return (
    <div className="w-80">
      <Swiper
        modules={[Navigation, Pagination]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerGroup={1}
        loop={true}
        scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <div className="flex container w-72 relative overflow-hidden bg-yellow-50 rounded-3xl border-black cursor-pointer">
            <div className="p-5 w-1/2 text-left">
              <h3 className="text-3xl font-bold">{props.name}</h3>
              <span className="block">{props.detail}</span>
              <h3 className="py-6 font-extrabold text-4xl">{props.price}$</h3>
              <p className="border-2 border-black/50 p-2 text-black rounded-2xl">
                <p className="text-center">Shop Now</p>
              </p>
            </div>
            <div className="w-1/2 bg-clip-content absolute top-12 left-60 1 object-cover">
              <img src={props.img} alt="bro" className="-rotate-12 h-60" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
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
