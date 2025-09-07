import { Paper } from "@mui/material";
import PropTypes from "prop-types";
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
        <p>{item.title}</p>
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
