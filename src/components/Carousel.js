import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { data } from "../assets/json/data";
import "../assets/styles/carousel.css";

function PhotoSlider() {
  return (
    <Carousel className="carousel-container" interval={3000}>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default PhotoSlider;