import React from "react";

const backgroundImageStyle = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default () => {
  return (
    <div
      className="parallax"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.3) 0%, rgba(0,0,0,.3)), url('/images/bir-lise-binasi.jpg')",
        ...backgroundImageStyle,
      }}
    >
      <div className="container parallax-content">
        <h2>Lorem Ipsum Lisesi</h2>
      </div>
    </div>
  );
};
