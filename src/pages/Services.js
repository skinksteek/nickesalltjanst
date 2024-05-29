import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import { data } from "../assets/json/data";
import "../assets/styles/services.css";

export default function Services() {
  return (
    <div>
      <Hero text="Våra tjänster" />
      <div className="card-grid">
        {data.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
