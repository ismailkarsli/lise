import React from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top container">
          <div className="footer-menu">
            <h2>Menü</h2>
            <ul>
              <li>
                <Link to="/">Anasayfa</Link>
              </li>
              <li>
                <Link to="/hakkimizda">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/personel">Personel</Link>
              </li>
              <li>
                <Link to="/haberler">Haberler</Link>
              </li>
              <li>
                <Link to="/etkinlikler">Etkinlikler</Link>
              </li>
              <li>
                <Link to="/iletisim">İletişim</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h2>İletişim</h2>
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
          <div className="footer-map">
            <h2>Harita</h2>
            <div className="map-content">
              <img
                style={{ width: "100%" }}
                alt="Harita örnek"
                src="https://i.imgur.com/h4r5aDF.png"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content container">
            <div className="footer-title">
              Tüm hakları saklıdır &copy; Okul adı
            </div>
            <div className="social-icons">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
