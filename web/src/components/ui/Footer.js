import React from "react";
import { Link } from "react-router-dom";

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
          <div className="footer-news">
            <h2>Haberler</h2>
            {/* <ul>
              <li>
                <Link to="/">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  a egestas erat
                </Link>
              </li>
              <li>
                <Link to="/">
                  Nulla elementum nulla id leo sagittis laoreet. Sed consequat,
                  mi in fermentum congue
                </Link>
              </li>
              <li>
                <Link to="/">
                  Curabitur rutrum, est id euismod porttitor, velit sapien
                  scelerisque sem, id iaculis
                </Link>
              </li>
            </ul> */}
          </div>
          <div className="footer-map">
            <h2>Harita</h2>
            <div className="map-content">Burada bir harita var.</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content container">
            <div className="footer-title">
              Tüm hakları saklıdır &copy; Okul adı
            </div>
            <div className="social-icons">Sosyal medya bağlantıları</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
