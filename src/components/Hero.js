import React from "react";
import "../assets/styles/hero.css";
import bilCropped from "../assets/images/bil-cropped.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <img src={bilCropped} />

      <article className="text-container">
        <div className="hero-title">
          <h1>Where can I get some?</h1>
        </div>
        <div className="hero-paragraph">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div className="hero-container-ending"></div>
      </article>
    </section>
  );
};

export default Hero;
