import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollButton from "./ScrollButton";
import "../assets/styles/banner.css";

gsap.registerPlugin(SplitText);

export default function Banner() {
  const containerRef = useRef(null);
  const messageRef = useRef(null);
  const buttonWrapperRef = useRef(null);

  useEffect(() => {
    let split;

    const ctx = gsap.context(() => {
      split = new SplitText(messageRef.current, {
        type: "lines,words",
      });

      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        split.words,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "circ.out",
          stagger: 0.15,
        }
      );

      tl.fromTo(
        buttonWrapperRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.5,
        },
        "-=0.2"
      );
    }, containerRef);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, []);

  return (
    <section className="banner">
      <div ref={containerRef} className="banner__container">
        <h1 ref={messageRef} className="banner__message">
          Allt mellan <br></br> <strong>himmel och jord </strong>
        </h1>

        <div ref={buttonWrapperRef} className="banner__cta">
          <ScrollButton targetId="content" text="Läs mer" />
        </div>
      </div>
    </section>
  );
}
