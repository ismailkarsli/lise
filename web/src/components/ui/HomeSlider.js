import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "./../../styles/swiper-bundle.min.css";

export default () => {
  SwiperCore.use([Navigation]);

  return (
    <React.Fragment>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className="container"
      >
        <SwiperSlide
          style={{ backgroundImage: "url(https://picsum.photos/800/400)" }}
        ></SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: "url(/images/slider-placeholder.png)" }}
        ></SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
};
