import React from "react";
import { settingsContext } from "../../../index";

const backgroundImageStyle = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

export default () => {
  const settings = React.useContext(settingsContext);
  return (
    <div
      className="parallax"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.4) 0%, rgba(0,0,0,.4)), url('/images/bir-lise-binasi.jpg')",
        ...backgroundImageStyle,
      }}
    >
      <div className="container">
        <div className="parallax-content">
          <h1>{settings.name}</h1>
          <p>{settings.aboutHome}</p>
        </div>
      </div>
    </div>
  );
};
