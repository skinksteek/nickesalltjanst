import React from "react";
import Button from "../components/Button";

export default function News() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div>
      <h2>Nyheter</h2>
      <Button text="Skicka" onClick={handleClick} />
    </div>
  );
}
