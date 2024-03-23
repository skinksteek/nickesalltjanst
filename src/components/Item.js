import React from "react";
import { Paper } from "@mui/material";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/carousel.css";

function Item({ item }) {
  return (
    <Paper
      className="carousel-paper"
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      elevation={5}
    >
      <div className="featured-content">
        <h2>{item.title}</h2>
        <a>
          <span>
            <FontAwesomeIcon icon={faChevronRight} size="l" fixedWidth />
          </span>
        </a>
      </div>
    </Paper>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
