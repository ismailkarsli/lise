import React from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact container">
    <h2 className="page-title">İletişim</h2>
    <div className="contact-content">
      <div className="contact-info">
      <h2>İletişim Bilgileri</h2>
            <div className="address">
              <HiLocationMarker /> Kemerburgaz Cad. İstanbul/Eyüp
            </div>
            <div className="phone">
              <HiPhone /> 0537 126 84 56
            </div>
            <div className="mail">
              <HiMail /> okul@meb.gov.tr
            </div>
      </div>
      <div className="map">
      <h2>Harita</h2>
        <img
          style={{ width: "100%" }}
          alt="Harita örnek"
          src="https://i.imgur.com/h4r5aDF.png"
        />
      </div>
    </div></div>
  );
};

export default Contact;
