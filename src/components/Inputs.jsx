import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import "../assets/styles/contact/form.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Inputs = ({ onMessageSent }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
    message: "",
  });

  const [formValid, setFormValid] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [invalidFields, setInvalidFields] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setInvalidFields({});
    }, 500);
    return () => clearTimeout(timer);
  }, [invalidFields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const {
      name: newName,
      email,
      phone,
      job,
      message,
    } = { ...formData, [name]: value };
    const isValid = newName && email && phone && job && message;
    setFormValid(isValid);

    if (name === "phone") {
      const isValidPhone = /^[0-9]*$/.test(value);
      if (!isValidPhone) {
        setPhoneError("Du kan enbart skriva siffror.");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    const isValidPhone = /^[0-9]*$/.test(formData.phone);
    const newInvalidFields = {};

    if (!formData.name) newInvalidFields.name = true;
    if (!formData.email) newInvalidFields.email = true;
    if (!formData.phone) newInvalidFields.phone = true;
    if (!formData.job) newInvalidFields.job = true;
    if (!formData.message) newInvalidFields.message = true;

    if (Object.keys(newInvalidFields).length > 0) {
      setInvalidFields(newInvalidFields);
      setSubmissionMessage(
        "Fyll i alla obligatoriska fält innan du skickar formuläret."
      );
      return;
    }

    if (formValid && isValidPhone) {
      emailjs
        .send(
          "service_2nhe6td",
          "template_zcutb97",
          formData,
          "owyZe8DIW9vnuATzf"
        )
        .then(
          () => {
            setFormSubmitted(true);
            setSubmissionMessage("Meddelande skickat!");
            onMessageSent(true);
          },
          () => {
            setFormSubmitted(true);
            setSubmissionMessage(
              "Skicka meddelande misslyckades, fyllde du i allt du skulle?"
            );
          }
        );
    } else {
      if (!isValidPhone) {
        setPhoneError("Du kan enbart skriva siffror.");
      }
      setSubmissionMessage(
        "Fyll i alla obligatoriska fält innan du skickar formuläret."
      );
    }
  };

  return (
    <div>
      {!formSubmitted ? (
        <form>
          <div
            className={`form__group field ${invalidFields.name ? "shake" : ""}`}
          >
            <input
              type="text"
              className={`form__field ${
                invalidFields.name ? "error-border" : ""
              }`}
              placeholder="Namn"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className="form__label">
              Namn
            </label>
          </div>
          <div
            className={`form__group field ${
              invalidFields.email ? "shake" : ""
            }`}
          >
            <input
              type="email"
              className={`form__field ${
                invalidFields.email ? "error-border" : ""
              }`}
              placeholder="E-post"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="form__label">
              E-post
            </label>
          </div>
          <div
            className={`form__group field ${
              invalidFields.phone ? "shake" : ""
            }`}
          >
            <input
              type="tel"
              className={`form__field ${
                invalidFields.phone ? "error-border" : ""
              }`}
              placeholder="Telefonnummer"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]*"
              required
              title="Du kan enbart skriva siffror."
            />
            {phoneError && <p className="error-message">{phoneError}</p>}
            <label htmlFor="phone" className="form__label">
              Telefonnummer
            </label>
          </div>
          <div
            className={`options-wrapper ${invalidFields.job ? "shake" : ""}`}
          >
            <div className="custom-select">
              <select
                name="job"
                id="lang"
                className={`${invalidFields.job ? "error-border" : ""}`}
                value={formData.job}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>
                  Välj jobb
                </option>
                <option className="option-color" value="Vatten och avlopp">
                  Vatten och avlopp
                </option>
                <option className="option-color" value="Dränering">
                  Dränering
                </option>
                <option className="option-color" value="Plattsättning">
                  Plattsättning
                </option>
                <option
                  className="option-color"
                  value="Plantering och borttagning"
                >
                  Plantering och borttagning
                </option>
                <option className="option-color" value="Mindre husgrunder">
                  Mindre husgrunder
                </option>
                <option className="option-color" value="Grustransporter">
                  Grustransporter
                </option>
                <option className="option-color" value="Skräp och riscontainer">
                  Skräp och riscontainer
                </option>
                <option
                  className="option-color"
                  value="Krantransporter med lastbil"
                >
                  Krantransporter med lastbil
                </option>
                <option className="option-color" value="Bilreparationer">
                  Bilreparationer
                </option>
                <option className="option-color" value="Däckförsäljning">
                  Däckförsäljning
                </option>
                <option
                  className="option-color"
                  value="Mindre snickeri och byggprojekt"
                >
                  Mindre snickeri och byggprojekt
                </option>
              </select>
            </div>
            <textarea
              placeholder="Övrig information"
              cols="50"
              rows="10"
              className={`${invalidFields.message ? "error-border" : ""}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-holder">
            <Button text="Skicka" onClick={handleClick} disabled={!formValid} />
          </div>
        </form>
      ) : (
        <div className="message-box">
          <p>{submissionMessage}</p>
          <button
            className="button"
            onClick={() => (window.location.href = "/kontakt")}
          >
            Försök igen
          </button>
        </div>
      )}
    </div>
  );
};

Inputs.propTypes = {
  onMessageSent: PropTypes.func.isRequired,
};

export default Inputs;
