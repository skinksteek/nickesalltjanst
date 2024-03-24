import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/contact/details.css";

const Details = () => {
  return (
    <section>
      <article>
        <h2>Kontakt information</h2>
        <p>
          Hör av dig direkt till mig eller fyll i formuläret så kontaktar jag
          dig.
        </p>
      </article>
      <div className="contact">
        <div>
          <FontAwesomeIcon icon={faPhone} size="xl" />
          <p>+46 70 278 58 81</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
          <p>linusigelstrom@gmail.com</p>
        </div>
      </div>
      <div className="socials">
        <FontAwesomeIcon icon={faFacebook} size="2xl" />
        <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </div>
    </section>
  );
};

export default Details;
