import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../assets/styles/contact/form.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Inputs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
    message: "",
  });

  const [formValid, setFormValid] = useState(false); // State to track form validation
  const [phoneError, setPhoneError] = useState(""); // State for phone number error message
  const navigate = useNavigate();

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate form fields
    const {
      name: newName,
      email,
      phone,
      job,
      message,
    } = {
      ...formData,
      [name]: value,
    };
    const isValid = newName && email && phone && job && message;
    setFormValid(isValid);

    // Validate phone number format
    if (name === "phone") {
      const isValidPhone = /^[0-9]*$/.test(value);
      if (!isValidPhone) {
        setPhoneError("Du kan enbart skriva siffror.");
      } else {
        setPhoneError("");
      }
    }
  };

  // Function to handle form submission
  const handleClick = (e) => {
    e.preventDefault();

    // Check if phone number contains only numbers
    const isValidPhone = /^[0-9]*$/.test(formData.phone);

    // If form is valid, proceed with sending email
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
            alert("Meddelande skickat!");
            navigate("/"); // Redirect to the home page
          },
          () => {
            alert(
              "Skicka meddelande misslyckades, fyllde du i allt du skulle?"
            );
          }
        );
    } else {
      if (!isValidPhone) {
        setPhoneError("Du kan enbart skriva siffror.");
      }
      alert("Fyll i alla obligatoriska fält innan du skickar formuläret.");
    }
  };

  return (
    <form>
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
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
      <div className="form__group field">
        <input
          type="email"
          className="form__field"
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
      <div className="form__group field">
        <input
          type="tel"
          className="form__field"
          placeholder="Telefonnummer"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]*" // Accepts only numeric input
          required
          title="Du kan enbart skriva siffror." // Error message for invalid input
        />
        {phoneError && <p className="error-message">{phoneError}</p>}
        <label htmlFor="phone" className="form__label">
          Telefonnummer
        </label>
      </div>
      <div className="options-wrapper">
        <div className="custom-select">
          <select
            name="job"
            id="lang"
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
            <option className="option-color" value="Plantering och borttagning">
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
  );
};

export default Inputs;
