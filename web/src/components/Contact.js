import React from "react";
import { settingsContext } from "../index";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const Contact = () => {
  const settings = React.useContext(settingsContext);
  return (
    <div className="contact container main-container">
      <h2 className="page-title">İletişim</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h2>İletişim Bilgileri</h2>
          {settings.address && (
            <div className="address">
              <HiLocationMarker /> {settings.address}
            </div>
          )}

          {settings.phone && (
            <div className="phone">
              <HiPhone /> {settings.phone}
            </div>
          )}

          {settings.mail && (
            <div className="mail">
              <HiMail /> {settings.mail}
            </div>
          )}
        </div>
        <div className="map">
          <h2>Harita</h2>
          <img
            style={{ width: "100%" }}
            alt="Harita örnek"
            src="https://i.imgur.com/h4r5aDF.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
