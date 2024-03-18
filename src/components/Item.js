import React from "react";
import { Paper, Button } from "@mui/material";
import PropTypes from "prop-types";
import "../assets/styles/carousel.css";

function Item({ item }) {
  return (
    <Paper
      className="carousel-paper"
      style={{
        backgroundColor: "var(--lightgrey)",
      }}
      elevation={5}
    >
      <img src={item.image} alt={item.title} className="carousel-img"></img>
      <article>
        <h2>{item.title}</h2>
      </article>

      <Button className="paper-button">Läs mer</Button>
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
