import React from "react";
import { settingsContext } from "./../index";
import htmlParser from "html-react-parser";

const About = () => {
  const settings = React.useContext(settingsContext);
  return (
    <div className="about container main-container">
      <h2 className="page-title">Hakkımızda</h2>
      <div className="about-content">
        {settings.about ? (
          htmlParser(settings.about)
        ) : (
          <span style={{ fontSize: "1.3rem" }}>Henüz bilgi girilmemiş.</span>
        )}
      </div>
    </div>
  );
};

export default About;
