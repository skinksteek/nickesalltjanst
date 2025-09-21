import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../assets/styles/button.css";

const Button = ({
  text,
  loading = false,
  type = "submit", // gör den till submit som default i formulär
  onClick,
  href,
  className = "",
  ...rest
}) => {
  const classes = `button ${loading ? "is-loading" : ""} ${className}`.trim();

  const handleClick = (e) => {
    if (loading) {
      e.preventDefault(); // blockera klick när loadern snurrar
      return;
    }
    onClick?.(e);
  };

  if (href) {
    return (
      <Link
        to={href}
        className={classes}
        aria-disabled={loading || undefined}
        onClick={handleClick}
        role="button"
        {...rest}
      >
        <span className="button__label">{text}</span>
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      aria-busy={loading || undefined}
      onClick={handleClick}
      {...rest}
    >
      <span className="button__label">{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
