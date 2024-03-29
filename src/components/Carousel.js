import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { data } from "../assets/json/data";
import "../assets/styles/carousel.css";

function PhotoSlider() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        className="carousel-container"
        interval={4000}
        indicatorIconButtonProps={{
          style: {
            padding: "5px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "var(--yellow)",
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "5px",
          },
        }}
        animation="slide"
      >
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

export default PhotoSlider;
