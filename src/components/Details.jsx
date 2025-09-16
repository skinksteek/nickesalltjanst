import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/contact/details.css";

const Details = () => {
  return (
    <section className="details-wrapper">
      <article>
        <h2>Kontakt information</h2>
        <p>
          Hör av dig direkt till mig eller fyll i formuläret så kontaktar jag
          dig.
        </p>
      </article>
      <div className="contact">
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} size="xl" />
          <p>+46 76-327 71 17</p>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
          <p>alltjanstnicke@hotmail.com</p>
        </div>
      </div>
      <div className="socials">
        <a
          id="facebook"
          href="https://www.facebook.com/profile.php?id=100076329215498"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
        </a>
      </div>
    </section>
  );
};

export default Details;
