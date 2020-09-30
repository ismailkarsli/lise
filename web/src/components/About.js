import React from "react";
import { settingsContext } from "./../index";

const About = () => {
  const settings = React.useContext(settingsContext);
  return (
    <div className="about container main-container">
      <h2 className="page-title">Hakkımızda</h2>
      <div className="about-content">{settings.about}</div>
    </div>
  );
};

export default About;
