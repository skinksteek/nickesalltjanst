import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Cards({ item }) {
  return (
    <div>
      <Card sx={{ Width: 500 }} style={{ backgroundColor: "var(--lightgrey)" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={item.image}
            alt={item.title}
          />
          <CardContent style={{ backgroundColor: "var(--lightgrey)" }}>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              color="var(--white)"
            >
              {item.title}
            </Typography>
            <Typography variant="caption" color="var(--white)">
              {item.bread}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bread: PropTypes.string.isRequired,
  }).isRequired,
};
