import React from "react";
import { settingsContext } from "../index";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import GoogleMap from "./ui/GoogleMap";

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
          <GoogleMap
            addMarker={true}
            latitude={settings.mapLatitude}
            draggable={false}
            longitude={settings.mapLongitude}
            /*
              Google map api key kullanılmalı
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
              */
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ minHeight: `338px` }} />}
            mapElement={
              <div
                className="block w-full h-full"
                style={{ width: "100%", height: "338px" }}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
