import { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Item from "./Item";
import { data } from "../assets/json/data";
import "../assets/styles/carousel.css";
import { Grid } from "@mui/material";

function PhotoSlider() {
  // Chunka en array i bitar om "size"
  const chunkArray = useCallback((arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }, []);

  // Välj hur många item per slide utifrån bredd
  const computeChunks = useCallback(() => {
    const w = window.innerWidth;
    const size = w < 480 ? 1 : w <= 768 ? 2 : 3;
    return chunkArray(data, size);
  }, [chunkArray]);

  const [carouselData, setCarouselData] = useState(() => computeChunks());

  useEffect(() => {
    const onResize = () => setCarouselData(computeChunks());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [computeChunks]);

  const gridColsFor = (chunkSize) =>
    chunkSize === 1 ? 12 : chunkSize === 2 ? 6 : 4;

  return (
    <div className="carousel-wrapper">
      <Swiper
        className="carousel-container"
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // spaceBetween just for a little breathing room between slides
        spaceBetween={16}
      >
        {carouselData.map((chunk, idx) => (
          <SwiperSlide key={idx}>
            <Grid container spacing={2} className="carousel-slide">
              {chunk.slice(0, 3).map((item) => (
                <Grid item xs={gridColsFor(chunk.length)} key={item.id}>
                  <Item item={item} />
                </Grid>
              ))}
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PhotoSlider;
