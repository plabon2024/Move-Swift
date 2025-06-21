import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <div className="pt-24">
      {" "}
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div>
          <img src="/assets/banner/banner1.png" />
        </div>

        <div>
          <img src="/assets/banner/banner2.png" />{" "}
        </div>

        <div>
          <img src="/assets/banner/banner3.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
