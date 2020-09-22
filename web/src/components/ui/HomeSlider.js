import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "./../../styles/swiper-bundle.min.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default () => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <React.Fragment>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ prevEl: "#prev-slide", nextEl: "#next-slide" }}
        pagination={{ el: ".slider-pagination", clickable: true }}
        style={{ position: "relative" }}
      >
        <SwiperSlide
          style={{ backgroundImage: "url(https://picsum.photos/1600/800)" }}
        >
          <h1>Deneme</h1>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: "url(/images/slider-placeholder.png)" }}
        ></SwiperSlide>

        <div className="slider-hover container">
          <div className="slider-navigation">
            <div id="prev-slide">
              <AiOutlineArrowLeft size="48" />
            </div>
            <div id="next-slide">
              <AiOutlineArrowRight size="48" />
            </div>
          </div>
          <div className="slider-pagination"></div>
        </div>
      </Swiper>
    </React.Fragment>
  );
};
