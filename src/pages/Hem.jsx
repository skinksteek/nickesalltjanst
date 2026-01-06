import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../components/Banner";
import Button from "../components/Button";
import "../assets/styles/hem.css";
import ServiceMap from "../components/ServiceMap";
import { data } from "/src/assets/json/data.js";

const featuredServices = data.filter((service) =>
  [3, 5, 8].includes(service.id)
);

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro text
      gsap.from(".home-intro > *", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Service cards
      gsap.from(".service-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // CTA under services
      gsap.from(".home-services .home-cta", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // About section
      gsap.from(".home-about .about-content > *", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      });
      gsap.from(".about-map", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

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
        </div>
        <div className="about-map">
          <ServiceMap className="service-map" />
        </div>
      </section>
      <div className="bottom-cta">
        <Button text="Läs mer om oss" href="/om" />
      </div>
    </>
  );
}
