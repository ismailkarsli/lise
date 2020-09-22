import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "./../../styles/swiper-bundle.min.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default () => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <React.Fragment>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={{ prevEl: "#prev-slide", nextEl: "#next-slide" }}
        pagination={{ el: ".slider-pagination", clickable: true }}
      >
        <SwiperSlide
          style={{ backgroundImage: "url(https://picsum.photos/1600/800)" }}
        >
          <div className="slide-content-wrapper container">
            <div className="slide-content">
              <h1>BAP Süreçlerinde Yapılan Düzenlemeler</h1>
              <p>
                Değerli Akademisyenlerimiz, Bilindiği gibi, ülkemizde
                yükseköğretimin yeniden yapılandırılması çalışmaları kapsamında
                Yükseköğretim Kalite Kurulu kurularak üniversitelerin dış
                denetime açılması ve yükseköğretimde ihtisaslaşma çalışmaları
                çerçevesinde araştırma üniversitelerinin belirlenmesi gibi
                uygulamalar hayata geçirilmektedir. Bu kapsamda; ülkemizin önde
                gelen yükseköğretim kurumları arasında bulunan Üniversitemizin
                bulunduğu seviyenin üzerine çıkabilmesi için, kaynaklarımızın
                verimli ve etkin bir şekilde harekete geçirilmesi ve tüm
                süreçlerimizde sürdürülebilir bir kalite düzeyinin
                sağlanabilmesi son derece önemlidir.
              </p>
              <Link to="/">Devamını oku</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: "url(/images/slider-placeholder.png)" }}
        >
          <div className="slide-content-wrapper container">
            <div className="slide-content">
              <h1>Mezuniyet Aşamasında Fazladan Alınacak Ders Duyurusu!</h1>
              <p>
                Yükseköğretim Kurulu Başkanlığının Yeni Corona Virüs Salgınında
                Eğitim-Öğretim Süreçleri Konulu 04.09.2020 tarih ve 55362 sayılı
                yazısı ile “Örgün eğitimlerde teorik derslerin mümkün olduğunca
                yüz yüze aynı ortamda bulunmaksızın uzaktan ve dijital öğretim
                yöntemleri ile yapılması, uygulamalı eğitimlerin zorunlu olduğu
                programlarda uygulamaların mümkünse ertelenmesi, ertelenmemesi
                durumunda kişisel koruyucu ekipmanların kullanımı sağlanarak ve
                gerekli tedbirler alınarak yüz yüze sürdürülmesi” önerilmiş olup
                07.09.2020 tarihinde Üniversitemiz Senatosu tarafından alınan
                karar gereğince; 2020-2021 Eğitim-Öğretim Yılı Güz Yarıyılında
                derslere ilişkin faaliyetlerin aşağıda belirtildiği şekilde
                uygulanmasına karar verilmiştir Lisansüstü; Yüksek
                Lisans/Doktora tüm enstitülerde eğitim hibrid (karma) olarak
                yapılacaktır.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{ backgroundImage: "url(https://upld.im/images/lyAQj.jpg)" }}
        >
          <div className="slide-content-wrapper container">
            <div className="slide-content">
              <h1>Random</h1>
              <p>
                2014-2015 ve sonrası müfredatına tabi önlisans ve lisans
                öğrencileri müfredatlarında yer alan minimum AKTS yükünü
                sağlamaları halinde, 2020-2021 Eğitim-Öğretim Yılı Güz Yarıyılı
                sonunda (yaz öğretimi dahil) mezun olacaklardır. Ancak, bazı
                programların ders planlarındaki AKTS değişiklikleri program
                sürelerine göre belirlenen AKTS yükünün altında kalmaktadır.
                Öğrencilerin mağduriyetlerini önlemek amacıyla, AKTS yüklerini
                tamamlamaları ve mezun olabilmeleri için “BEB4067 Oryantasyon I”
                dersi öğrencilerin eksik AKTS kredi değeri kadar açılacaktır.
                AKTS tamamlama dersi olarak alınan söz konusu ders alan içi veya
                alan dışı ders yerine geçmez. Dersin programı hakkında ayrıca
                duyuru yapılacaktır. Bu nedenle mezuniyet aşamasına gelen
                öğrencilerin toplam AKTS kredilerini kontrol etmeleri ve
                başvurularını AKTS Tamamlama Formu ile birlikte aşağıda
                belirtilen tarihlerde gerçekleştirmeleri gerekmektedir.
              </p>
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
    </React.Fragment>
  );
};
