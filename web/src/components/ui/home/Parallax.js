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
        background: `linear-gradient(rgba(0,0,0,.4) 0%, rgba(0,0,0,.4)), url('${
          settings.aboutHomeBg
            ? `${process.env.REACT_APP_GRAPHQL_SERVER}images/1920/1080/${settings.aboutHomeBg}`
            : "/images/placeholder-2.png"
        }')`,
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
