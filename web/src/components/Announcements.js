import React from "react";

const Announcements = () => {
  return (
    <div className="main-container">
      <h2 className="page-title">Duyurular</h2>
      <div className="timeline container">
        <div className="timeline-item">
          <div className="item-photo">
            <img src="https://picsum.photos/1500/800" alt="Phosto" />
          </div>
          <div className="item-meta" date-is="28 Eylül 2020">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h1>
            <p>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="item-photo">
            <img src="https://picsum.photos/1500/1500" alt="Phosto" />
          </div>
          <div className="item-meta" date-is="28 Eylül 2020">
            <h1>Incididunt ut labore et dolore magna aliqua.</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
