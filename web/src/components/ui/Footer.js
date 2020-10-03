import React from "react";
import { settingsContext } from "../../index";
// import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const settings = React.useContext(settingsContext);

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top container"></div>
        <div className="footer-bottom">
          <div className="footer-bottom-content container">
            <div className="footer-title">
              <span>Tüm hakları saklıdır &copy;</span> {settings.name}
            </div>
            <div className="social-icons">
              {settings.facebook && (
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={settings.facebook}
                  >
                    <FaFacebookF />
                  </a>
                </span>
              )}

              {settings.twitter && (
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={settings.twitter}
                  >
                    <FaTwitter />
                  </a>
                </span>
              )}

              {settings.instagram && (
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={settings.instagram}
                  >
                    <FaInstagram />
                  </a>
                </span>
              )}

              {settings.youtube && (
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={settings.youtube}
                  >
                    <FaYoutube />
                  </a>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
