import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/button.css";

const Button = ({ text, href, onClick }) => {
  const handleClick = (event) => {
    if (onClick && typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <a href={href} className="button" onClick={handleClick}>
      <span>{text}</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
