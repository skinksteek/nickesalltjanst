import { useEffect, useRef } from "react";
import Banner from "../components/Banner";
import ServiceMap from "../components/ServiceMap";
import "./../assets/styles/about.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-page-title span", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      gsap.from(underlineRef.current, {
        scaleX: 0,
        duration: 1.5,
        ease: "expo.inOut",
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <Banner title="Detta är Nickesalltjänst" showButton={false} />
      <div className="blueprint-grid">
        <section className="about-page-intro">
          <h2 className="about-page-title" ref={titleRef}>
            <span className="block-text">FRÅN GARAGEPROJEKT</span>
            <span className="script-text">till hela</span>
            <span className="accent-text">Värmlands allt-i-allo</span>
            <div className="title-underline" ref={underlineRef}></div>
          </h2>
          <p className="intro-paragraph">
            "Det började i Storfors 2012. Med en gammal verktygslåda, en
            begagnad lastbil och en enkel vision: att hjälpa grannarna med det
            de själva inte hann eller kunde fixa. Sedan dess har Nickes
            Alltjänst växt, men hjärtat i verksamheten är exakt detsamma idag
            som för över tio år sedan. För oss spelar det ingen roll om det
            handlar om att serva en bil, gjuta en husgrund eller beskära en
            häck. Det är helheten som driver oss. Vi vet att våra kunder
            uppskattar att bara behöva ringa ett nummer, oavsett om de behöver
            en grusleverans till Filipstad eller ett altanbygge i Karlskoga. Vi
            är stolta över att utgå från Storfors, men vi ser hela närområdet
            som vår arbetsplats. Med en radie på fem mil täcker vi in allt från
            Kristinehamn till Degerfors. För mig handlar varje uppdrag om
            förtroende – att lämna en plats lite bättre än vi fann den, och att
            alltid stå för det hantverk vi levererar."
            <br />
            <strong className="signature">
              – Nicke, Grundare av Nickesalltjänst
            </strong>
          </p>
        </section>
      </div>{" "}
      <section className="home-about">
        <div className="about-content">
          <h2>Lokalt i Storfors, verksamma i hela regionen</h2>
          <p>
            Vi utgår från Storfors men arbetar även i omkringliggande områden
            inom cirka fem mils radie. Det innebär att vi ofta har uppdrag i
            bland annat Kristinehamn, Filipstad, Degerfors och Karlskoga.
            Oavsett var uppdraget finns lägger vi samma noggrannhet och
            engagemang i varje arbete.
          </p>
          <div className="about-map">
            <ServiceMap className="service-map" />
          </div>
        </div>
      </section>
    </>
  );
}
