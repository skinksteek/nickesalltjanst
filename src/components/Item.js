import React from "react";
import { Paper, Button } from "@mui/material";
import PropTypes from "prop-types";

function Item({ item }) {
  return (
    <Paper>
      <img src={item.image} alt={item.title}></img>
      <h2>{item.title}</h2>

      <Button className="CheckButton">Check it out!</Button>
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
