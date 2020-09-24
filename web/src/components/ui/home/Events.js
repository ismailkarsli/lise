import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./../../../styles/swiper-bundle.min.css";

export default () => {
  return (
    <div className="events container">
      <div className="events-content">
        <h2>Etkinlikler</h2>
        <Swiper
          slidesPerView={1}
          simulateTouch={false}
          breakpoints={{
            768: { slidesPerView: "2" },
            1024: { slidesPerView: "3", simulateTouch: "true" },
          }}
        >
          <SwiperSlide>
            <div className="event-slide-content">
              <time className="event-date" dateTime="2020-09-24T07:32:15+03:00">
                <span className="day">24</span>
                <span className="year-month">Eylül 2020</span>
              </time>
              <Link to="/">
                <h3>Lorem ipsum dolor sit amette toplanıyoruz.</h3>
              </Link>
              <div className="event-time">12:00 - 13:00</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="event-slide-content">
              <time className="event-date" dateTime="2020-09-24T07:32:15+03:00">
                <span className="day">24</span>
                <span className="year-month">Eylül 2020</span>
              </time>
              <Link to="/">
                <h3>Lorem ipsum dolor sit amette toplanıyoruz.</h3>
              </Link>
              <div className="event-time">Tüm gün</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="event-slide-content">
              <time className="event-date" dateTime="2020-09-24T07:32:15+03:00">
                <span className="day">24</span>
                <span className="year-month">Eylül 2020</span>
              </time>
              <Link to="/">
                <h3>Lorem ipsum dolor sit amette toplanıyoruz.</h3>
              </Link>
              <div className="event-time">10:30 - 16:00</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
