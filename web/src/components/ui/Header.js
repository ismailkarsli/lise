import React, { useContext, useRef } from "react";
import { settingsContext } from "./../../index";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export default () => {
  const settings = useContext(settingsContext);
  const navRef = useRef();

  const openCloseMenu = () => {
    navRef.current.style.display =
      navRef.current.style.display !== "flex" ? "flex" : "none";
  };

  const menuOnClick = () => {
    navRef.current.style.display = window.innerWidth > 1024 ? "flex" : "none";
  };

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
          <div className="nav-wrap" ref={navRef}>
            <nav>
              <ul>
                <li>
                  <Link to="/">Anasayfa</Link>
                </li>
                <li>
                  <Link to="/hakkimizda" onClick={menuOnClick}>
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link to="/bilgi/haberler" onClick={menuOnClick}>
                    Haberler
                  </Link>
                </li>
                <li>
                  <Link to="/bilgi/duyurular" onClick={menuOnClick}>
                    Duyurular
                  </Link>
                </li>
                <li>
                  <Link to="/bilgi/etkinlikler" onClick={menuOnClick}>
                    Etkinlikler
                  </Link>
                </li>
                <li>
                  <Link to="/iletisim" onClick={menuOnClick}>
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav-toggle">
            <button onClick={openCloseMenu}>Menü</button>
          </div>
        </div>
      </div>

      <div className="ataturk">
        <img src="/images/ui/ataturk.png" alt="Atatürk" />
      </div>
    </header>
  );
};
