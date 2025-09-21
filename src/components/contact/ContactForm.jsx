import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "/src/assets/styles/contact/formpage.css";
import Button from "../../components/Button";
import ContactFormFields from "./ContactFormFields.jsx";
import ContactDetails from "./ContactDetails";
import { PHONE_REGEX, normalizePhone } from "../contact/utils/phone.js";
import { sendContact } from "../contact/services/emailService.js";

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export default function ContactForm({
  onMessageSent,
  redirectTo = "/kontakt/skickat-meddelande",
  redirectDelayMs = 5000,
  redirectFail = "/kontakt/meddelande-misslyckat",
  errorDelayMs = 1000,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
    message: "",
  });
  const [invalidFields, setInvalidFields] = useState({});
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);
  const phoneRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setInvalidFields({}), 500);
    return () => clearTimeout(t);
  }, [invalidFields]);

  const validatePhone = (value) => {
    const normalized = normalizePhone(value);
    const ok = PHONE_REGEX.test(normalized);
    const msg = ok
      ? ""
      : "Ange ett giltigt nummer, t.ex. +46701234567 eller 0701234567.";
    setPhoneError(msg);
    phoneRef.current?.setCustomValidity(msg);
    return { ok, normalized };
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (name === "phone") validatePhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formEl = formRef.current;
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      const newInvalid = {};
      ["name", "email", "phone", "job", "message"].forEach((k) => {
        if (!formData[k]) newInvalid[k] = true;
      });
      setInvalidFields(newInvalid);
      return;
    }

    const { ok, normalized } = validatePhone(formData.phone);
    if (!ok) {
      phoneRef.current?.reportValidity();
      return;
    }

    try {
      setLoading(true);
      // Kör sändning och delay parallellt
      await Promise.all([
        sendContact({ ...formData, phone: normalized }),
        sleep(redirectDelayMs),
      ]);
      onMessageSent?.(true);
      navigate(redirectTo);
    } catch (err) {
      await sleep(errorDelayMs);
      navigate(redirectFail);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact__layout">
        <aside className="contact__details">
          <ContactDetails />
        </aside>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact__form"
          noValidate
        >
          <ContactFormFields
            formRef={formRef}
            phoneRef={phoneRef}
            formData={formData}
            invalidFields={invalidFields}
            phoneError={phoneError}
            onChange={handleFieldChange}
          />

          <div className="contact__actions">
            <Button text="Skicka" type="submit" loading={loading} />
          </div>
        </form>
      </div>
    </section>
  );
}

ContactForm.propTypes = {
  onMessageSent: PropTypes.func.isRequired,
  redirectTo: PropTypes.string,
  redirectDelayMs: PropTypes.number,
  redirectFail: PropTypes.string,
  errorDelayMs: PropTypes.number,
};
