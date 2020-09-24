import React from "react";
import Slider from "./ui/home/MainSlider";
import NewsAnns from "./ui/home/NewsAnnouncements";
import Parallax from "./ui/home/Parallax";
import Events from "./ui/home/Events";
import Staff from "./ui/home/Staff";
import Links from "./ui/home/Links";
import Footer from "./ui/Footer";

export default () => {
  return (
    <React.Fragment>
      <Slider />
      <NewsAnns />
      <Parallax />
      <Events />
      <Staff />
      <Links />
      <Footer />
    </React.Fragment>
  );
};
