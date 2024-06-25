import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import { data } from "../assets/json/data";
import "../assets/styles/carousel.css";
import { Grid } from "@mui/material";

function PhotoSlider() {
  // Function to chunk array into smaller arrays
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // State to hold chunked data based on window size
  const [carouselData, setCarouselData] = useState([]);

  // Function to update carousel data based on window size
  const handleResize = () => {
    if (window.innerWidth < 480) {
      return chunkArray(data, 1); // 1 item per slide for screens narrower than 480px
    } else if (window.innerWidth <= 768) {
      return chunkArray(data, 2); // 2 items per slide for screens between 480px and 768px
    } else {
      return chunkArray(data, 3); // 3 items per slide for screens wider than 768px
    }
  };

  // Initialize carousel data based on initial window size
  useEffect(() => {
    setCarouselData(handleResize());

    // Event listener for window resize
    const handleResizeEvent = () => {
      setCarouselData(handleResize());
    };

    window.addEventListener("resize", handleResizeEvent);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, []); // Empty dependency array to run effect only once on mount

  // Calculate grid item size based on number of items per slide
  const calculateGridSize = (chunkSize) => {
    switch (chunkSize) {
      case 1:
        return 12; // 1 item takes full width
      case 2:
        return 6; // 2 items take half width
      case 3:
        return 4; // 3 items take one-third width
      default:
        return 4; // Default to one-third width
    }
  };

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
        {carouselData.map((chunk, index) => (
          <Grid container spacing={2} key={index} className="carousel-slide">
            {/* Limit to maximum of 3 items per slide */}
            {chunk.slice(0, 3).map((item) => (
              <Grid item xs={calculateGridSize(chunk.length)} key={item.id}>
                <Item item={item} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </div>
  );
}

export default PhotoSlider;
