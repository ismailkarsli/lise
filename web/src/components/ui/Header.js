import React, { useContext } from "react";
import { settingsContext } from "./../../index";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export default () => {
  const settings = useContext(settingsContext);

  return (
    <header className="container">
      <div className="header-top">
        <div className="header-top-content">
          <ul className="left-bar">
            {settings.phone && (
              <li>
                <AiFillPhone />
                {settings.phone}
              </li>
            )}
            {settings.mail && (
              <li>
                <AiFillMail />
                {settings.mail}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="header">
        <div className="header-inner">
          <div className="title">
            <Link to="/">{settings.name}</Link>
          </div>
          <div className="nav-wrap">
            <nav>
              <ul>
                <li>
                  <Link to="/">Anasayfa</Link>
                </li>
                <li>
                  <Link to="/hakkimizda">Hakkımızda</Link>
                </li>
                <li>
                  <Link to="/haberler">Haberler</Link>
                </li>
                <li>
                  <Link to="/duyurular">Duyurular</Link>
                </li>
                <li>
                  <Link to="/etkinlikler">Etkinlikler</Link>
                </li>
                <li>
                  <Link to="/iletisim">İletişim</Link>
                </li>
              </ul>
            </nav>
            <span style={{ display: "none" }}>mobil toggle</span>
          </div>
        </div>
      </div>

      <div className="ataturk">
        <img src="/images/ui/ataturk.png" alt="Atatürk" />
      </div>
    </header>
  );
};
