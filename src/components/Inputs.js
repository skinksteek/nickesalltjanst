import React from "react";
import "../assets/styles/contact/form.css";
import Button from "./Button";

const Inputs = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <form>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
        <label htmlFor="name" className="form__label">
          Namn
        </label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="E-post"
          name="E-post"
          id="E-post"
          required
        />
        <label htmlFor="E-post" className="form__label">
          E-post
        </label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Telefonnummer"
          name="Telefonnummer"
          id="Telefonnummer"
          required
        />
        <label htmlFor="Telefonnummer" className="form__label">
          Telefonnummer
        </label>
      </div>
      <div className="options-wrapper">
        <div className="custom-select">
          <select name="jobb" id="lang">
            <option value="select">Välj jobb</option>
            <option value="javascript">Dränering</option>
            <option value="php">Asfalt</option>
            <option value="java">Grus</option>
            <option value="golang">Gräs</option>
            <option value="python">Bus</option>
            <option value="c#">Fräs</option>
            <option value="C++">Plast</option>
            <option value="erlang">Snus</option>
          </select>
        </div>
        <textarea placeholder="Övrig information" cols="50" rows="10" />
      </div>
      <div className="button-holder">
        <Button text="Skicka" onClick={handleClick} />
      </div>
    </form>
  );
};

export default Inputs;
