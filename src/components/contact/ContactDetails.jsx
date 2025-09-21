import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "/src/assets/styles/contact/details.css";

const ContactDetails = () => {
  return (
    <section className="details">
      <div className="details__heading">
        <h2>Kontakt information</h2>
        <p>
          Hör av dig direkt till mig eller fyll i formuläret så kontaktar jag
          dig.
        </p>
      </div>
      <div className="details__contact">
        <div className="details__phone" id="phone-icon">
          <FontAwesomeIcon icon={faPhone} size="xl" />
          <p>
            <a href="tel:+46 76-327 71 17">+46 76-327 71 17</a>
          </p>
        </div>
        <div className="details__email" id="email-icon">
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
          <p>
            <a href="mailto:someone@example.com">alltjanstnicke@hotmail.com</a>
          </p>
        </div>
      </div>
      <div className="details__socials">
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

export default ContactDetails;
