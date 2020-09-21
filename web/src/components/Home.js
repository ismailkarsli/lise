import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./../styles/swiper-bundle.min.css";

export default () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://picsum.photos/800/400"
            alt="Slide"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/800/400"
            alt="Slide"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/800/400"
            alt="Slide"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/800/400"
            alt="Slide"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
