import PropTypes from "prop-types";
import "../assets/styles/service-card.css";

export default function ServiceCard({ children }) {
  return <article className="service-card">{children}</article>;
}

ServiceCard.propTypes = {
  children: PropTypes.node.isRequired,
};
