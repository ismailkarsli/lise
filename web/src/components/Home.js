import React from "react";
import Slider from "./ui/HomeSlider";

export default () => {
  return (
    <React.Fragment>
      <Slider />
      <div className="home-container container">
        <div className="home-container-content">
          <div>
            <h2>Haberler</h2>
          </div>
          <div>
            <h2>Duyurular</h2>
          </div>
        </div>
      </div>
      <div
        className="parallax"
        style={{
          backgroundImage: "url('https://picsum.photos/1600/800')",
          minHeight: "75vh",
          marginTop: "24px",
          width: "100%",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </React.Fragment>
  );
};
