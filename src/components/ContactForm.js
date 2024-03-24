import React from "react";
import Details from "./Details";
import Inputs from "./Inputs";
import "../assets/styles/contact/formpage.css";

const ContactForm = () => {
  return (
    <section className="page-wrapper">
      <div className="page-heading-wrapper">
        <div className="contact-wrapper">
          <Details />
          <Inputs />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
