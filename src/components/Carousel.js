import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { data } from "../assets/json/data";

function PhotoSlider() {
  return (
    <Carousel>
      {data.map(
        (item) => (
          console.log(item.image), (<Item key={item.id} item={item} />)
        )
      )}
    </Carousel>
  );
}

export default PhotoSlider;
