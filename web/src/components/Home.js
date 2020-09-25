import React from "react";
import Slider from "./ui/home/MainSlider";
import NewsAnns from "./ui/home/NewsAnnouncements";
import Parallax from "./ui/home/Parallax";
import Events from "./ui/home/Events";

export default () => {
  return (
    <React.Fragment>
      <Slider />
      <NewsAnns />
      <Parallax />
      <Events />
    </React.Fragment>
  );
};
