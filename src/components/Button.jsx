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
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
