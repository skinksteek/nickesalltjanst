import React, { useState } from "react";
import Details from "./Details";
import Inputs from "./Inputs";
import "../assets/styles/contact/formpage.css";
import Button from "./Button";

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <section className="page-wrapper">
      <div className="page-heading-wrapper">
        {!messageSent && (
          <div className="contact-wrapper">
            <Details />
            <Inputs onMessageSent={setMessageSent} />
          </div>
        )}
        {messageSent && (
          <div className="message-box">
            <p>Meddelande skickat!</p>
            <Button onClick={() => setMessageSent(false)} text="Stäng" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
