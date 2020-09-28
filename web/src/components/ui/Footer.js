import React from "react";
// import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top container"></div>
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
