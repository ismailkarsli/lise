import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./../../../styles/swiper-bundle.min.css";

const backgroundImageStyle = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default () => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <div className="home-slider">
      <Swiper
        slidesPerView={1}
        loop
        speed={1000}
        navigation={{ prevEl: "#prev-slide", nextEl: "#next-slide" }}
        pagination={{ el: ".slider-pagination", clickable: true }}
      >
        <SwiperSlide
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 75%), url('/images/placeholder-1.png')",
            ...backgroundImageStyle,
          }}
        >
          <div className="slide-content-wrapper container">
            <div className="slide-content">
              <h2>Mezuniyet Aşamasında Fazladan Alınacak Ders Duyurusu</h2>
              <p>
                Tüm Öğrencilerimizin Dikkatine! Öğrenci otomasyonunu kullanmakta
                olan tüm öğrencilerimiz adına ogrencino@ogr.uludag.edu.tr
                şeklinde e-posta hesapları kullanıma açılmıştır.
              </p>
              <Link to="/" className="read-more">
                Devamını oku
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.60) 75%), url('https://picsum.photos/1600/800')",
            ...backgroundImageStyle,
          }}
        >
          <div className="slide-content-wrapper container">
            <div className="slide-content">
              <h2>BAP Süreçlerinde Yapılan Düzenlemeler</h2>
              <p>
                Değerli Akademisyenlerimiz, Bilindiği gibi, ülkemizde
                yükseköğretimin yeniden yapılandırılması çalışmaları kapsamında
                Yükseköğretim Kalite Kurulu kur
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 75%), url('/images/placeholder-2.png')",
            ...backgroundImageStyle,
          }}
        >
          <div className="slide-content-wrapper container">
            <div className="slide-content">
              <h2>Öğrenci Mail Hesapları Kullanım Bilgileri</h2>
              <p>
                Yükseköğretim Kurulu Başkanlığının Yeni Corona Virüs Salgınında
                Eğitim-Öğretim Süreçleri Konulu 04.09.2020 tarih ve 55362 sayılı
                yazısı ile “Örgün eği
              </p>
              <Link to="/" className="read-more">
                Devamını oku
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <div className="slider-hover container">
          <div className="slider-pagination"></div>
          <div className="slider-navigation">
            <div id="prev-slide">
              <AiOutlineArrowLeft size="48" />
            </div>
            <div id="next-slide">
              <AiOutlineArrowRight size="48" />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
