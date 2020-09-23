import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

export default () => {
  return (
    <header className="container">
      <div className="header-top">
        <div className="header-top-content">
          <ul className="left-bar">
            <li>
              <AiFillPhone />
              +90 555 555 55 55
            </li>
            <li>
              <AiFillMail />
              mail@meb.gov.tr
            </li>
          </ul>
        </div>
      </div>

      <div className="header">
        <div className="header-inner">
          <div className="title">
            <a href="/">Lorem Ipsum</a>
          </div>
          <div className="nav-wrap">
            <nav>
              <ul>
                <li>
                  <a href="/">Anasayfa</a>
                </li>
                <li>
                  <a href="/">Hakkımızda</a>
                </li>
                <li>
                  <a href="/">Haberler</a>
                </li>
                <li>
                  <a href="/">Aktiviteler</a>
                </li>
                <li>
                  <a href="/">İletişim</a>
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
