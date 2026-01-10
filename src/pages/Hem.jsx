import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../components/Banner";
import Button from "../components/Button";
import "../assets/styles/hem.css";
import ServiceMap from "../components/ServiceMap";
import { data } from "/src/assets/json/data.js";
import { useHomeAnimations } from "../hooks/useHomeAnimations";

const featuredServices = data.filter((service) =>
  [3, 5, 8].includes(service.id)
);

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  useHomeAnimations(servicesRef, aboutRef);

  return (
    <>
      <Banner />

      <section ref={servicesRef} className="home-services">
        <div className="home-intro">
          <h2 id="content">Det här är Nickesalltjänst</h2>
          <p>
            Vi erbjuder ett brett utbud av tjänster,
            <br />
            en del av de tjänster är exempelvis
          </p>
        </div>

        <div className="services-grid">
          {featuredServices.map((service) => (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <div className="service-overlay">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="home-cta">
          <Button text="Se alla tjänster" href="/tjanster" />
        </div>
      </section>

      <section ref={aboutRef} className="home-about">
        <div className="about-content">
          <h2>Lokalt i Storfors, verksamma i hela regionen</h2>
          <p>
            Vi utgår från Storfors men arbetar även i omkringliggande områden
            inom cirka fem mils radie. Det innebär att vi ofta har uppdrag i
            bland annat Kristinehamn, Filipstad, Degerfors och Karlskoga.
            Oavsett var uppdraget finns lägger vi samma noggrannhet och
            engagemang i varje arbete.
          </p>
          <div className="bottom-cta">
            <Button text="Läs mer om oss" href="/om" />
          </div>
        </div>
        <div className="about-map">
          <ServiceMap className="service-map" />
        </div>
      </section>
      <a href="/kontakt" class="contact-cta">
        <span class="contact-text">
          <strong>Behöver du hjälp eller offert?</strong>
          <span> Hör av dig – vi svarar gärna.</span>
        </span>
        <span class="contact-icon">→</span>
      </a>
    </>
  );
}
