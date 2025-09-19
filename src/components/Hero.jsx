import "../assets/styles/hero.css";
import bilCropped from "/src/images/bil-cropped.jpg";
import PropTypes from "prop-types";

const Hero = ({ text, bread }) => {
  return (
    <section className="hero-container">
      <img src={bilCropped} />

      <article className="text-container">
        <div className="hero-title">
          <h1>{text}</h1>
        </div>
        <div className="hero-paragraph">
          <p>{bread}</p>
        </div>
      </article>
    </section>
  );
};

Hero.propTypes = {
  text: PropTypes.string.isRequired,
  bread: PropTypes.string.isRequired,
};

export default Hero;
