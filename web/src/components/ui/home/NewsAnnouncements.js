import React from "react";
import { Link } from "react-router-dom";
import { BsCalendar } from "react-icons/bs";


export default () => {
  return (
    <div className="news-anns-section container">
      <div className="news-anns-section-content">
        <div>
          <h2>Haberler</h2>
          <div className="news-anns-list">
            <div className="list-item">
              <div className="image-container">
                <Link to="/">
                  <img src="/images/placeholder-1.png" alt="Slayt" />
                </Link>
              </div>
              <div className="item-meta-info">
                <h3>
                  <Link to="/" className="item-title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla a egestas erat
                  </Link>
                </h3>
                <div className="date">
                  <time dateTime="2019-08-07T07:32:15+00:00">
                    <BsCalendar /> 7 Ağustos 2019
                  </time>
                </div>
              </div>
            </div>
          </div>
          <div className="news-anns-list">
            <div className="list-item">
              <div className="image-container">
                <Link to="/">
                  <img src="https://picsum.photos/1600/800" alt="Slayt" />
                </Link>
              </div>
              <div className="item-meta-info">
                <h3>
                  <Link to="/" className="item-title">
                    In mattis mi scelerisque erat consectetur imperdiet. Etiam
                    vehicula quis leo nec vulputate
                  </Link>
                </h3>
                <div className="date">
                  <time dateTime="2019-08-07T07:32:15+00:00">
                    <BsCalendar /> 7 Ağustos 2019
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>Duyurular</h2>
          <div className="news-anns-list">
            <div className="list-item">
              <div className="image-container">
                <Link to="/">
                  <img src="/images/placeholder-2.png" alt="Slayt" />
                </Link>
              </div>
              <div className="item-meta-info">
                <h3>
                  <Link to="/" className="item-title">
                    Nulla elementum nulla id leo sagittis laoreet. Sed
                    consequat, mi in fermentum congue
                  </Link>
                </h3>
                <div className="date">
                  <time dateTime="2019-08-07T07:32:15+00:00">
                    <BsCalendar /> 7 Ağustos 2019
                  </time>
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="image-container">
                <Link to="/">
                  <img src="/images/placeholder-1.png" alt="Slayt" />
                </Link>
              </div>
              <div className="item-meta-info">
                <h3>
                  <Link to="/" className="item-title">
                    Curabitur rutrum, est id euismod porttitor, velit sapien
                    scelerisque sem, id iaculis
                  </Link>
                </h3>
                <div className="date">
                  <time dateTime="2019-08-07T07:32:15+00:00">
                    <BsCalendar /> 7 Ağustos 2019
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};
