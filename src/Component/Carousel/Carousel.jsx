import React from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { arr } from "../../Function/function";

const Carousell = () => {
  
  return (
    <div className="carouselDiv">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={3}
        showStatus={false}
        showThumbs={false}
      >
        {arr.map((ele) => {
          return <img src={ele} alt="" />;
        })}
      </Carousel>
      <div className="overlay"></div>
    </div>
  );
};

export default Carousell;
