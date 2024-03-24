import React from "react";
import "../assets/styles/contact/form.css";

const Inputs = () => {
  return (
    <form>
      <div>
        <p>Namn</p>
        <input type="text" placeholder="Allen Jones" />
      </div>
      <div>
        <p>Email</p>
        <input type="email" placeholder="aljay126@gmail.com" />
      </div>
      <div>
        <p>Telefonnummer</p>
        <input type="number" placeholder="+46702785881" />
      </div>
      <div>
        <div>
          <label htmlFor="lang">Typ av jobb</label>
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

        <p>Meddelande</p>
        <textarea placeholder="Remember, be nice!" cols="50" rows="10" />
      </div>
      <button className="form-button" type="submit" value="Skicka meddelande">
        Skicka
      </button>
    </form>
  );
};

export default Inputs;
