import PropTypes from "prop-types";
import "/src/assets/styles/contact/form.css";

export default function ContactFormFields({
  phoneRef,
  formData,
  invalidFields,
  phoneError,
  onChange,
}) {
  return (
    <>
      <div className={`form__group field ${invalidFields.name ? "shake" : ""}`}>
        <input
          type="text"
          className={`form__field ${invalidFields.name ? "error-border" : ""}`}
          placeholder="Namn"
          name="name"
          id="name"
          value={formData.name}
          onChange={onChange}
          required
          autoComplete="name"
        />
        <label htmlFor="name" className="form__label">
          Namn
        </label>
      </div>

      <div
        className={`form__group field ${invalidFields.email ? "shake" : ""}`}
      >
        <input
          type="email"
          className={`form__field ${invalidFields.email ? "error-border" : ""}`}
          placeholder="E-post"
          name="email"
          id="email"
          value={formData.email}
          onChange={onChange}
          required
          autoComplete="email"
        />
        <label htmlFor="email" className="form__label">
          E-post
        </label>
      </div>

      <div
        className={`form__group field ${invalidFields.phone ? "shake" : ""}`}
      >
        <input
          ref={phoneRef}
          type="tel"
          className={`form__field ${invalidFields.phone ? "error-border" : ""}`}
          placeholder="Telefonnummer"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={onChange}
          required
          inputMode="tel"
          title="Ange ett giltigt nummer, t.ex. +46701234567 eller 0701234567."
          autoComplete="tel"
        />
        {phoneError && <p className="error-message">{phoneError}</p>}
        <label htmlFor="phone" className="form__label">
          Telefonnummer
        </label>
      </div>

      <div className={`options-wrapper ${invalidFields.job ? "shake" : ""}`}>
        <div className="custom-select">
          <select
            name="job"
            id="lang"
            className={`${invalidFields.job ? "error-border" : ""}`}
            value={formData.job}
            onChange={onChange}
            required
          >
            <option value="" disabled>
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
            <option className="option-color" value="Annat">
              Annat typ av jobb
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
          onChange={onChange}
          required
        />
      </div>
    </>
  );
}

ContactFormFields.propTypes = {
  phoneRef: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  invalidFields: PropTypes.object.isRequired,
  phoneError: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
