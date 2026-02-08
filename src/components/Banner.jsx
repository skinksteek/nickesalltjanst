import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollButton from "./ScrollButton";
import "../assets/styles/banner.css";

gsap.registerPlugin(SplitText);

export default function Banner({
  title,
  buttonText = "Läs mer",
  targetId = "content",
  showButton = false,
  strong,
}) {
  const containerRef = useRef(null);
  const messageRef = useRef(null);
  const buttonWrapperRef = useRef(null);

  useEffect(() => {
    let split;
    const ctx = gsap.context(() => {
      split = new SplitText(messageRef.current, { type: "lines,words" });
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        split.words,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: "circ.out", stagger: 0.15 }
      );

      if (buttonWrapperRef.current) {
        tl.fromTo(
          buttonWrapperRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.5 },
          "-=0.2"
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [showButton]);

  return (
    <section className="banner">
      <div ref={containerRef} className="banner__container">
        <h1 ref={messageRef} className="banner__message">
          {title}
          <strong>{strong}</strong>
        </h1>

        {showButton && (
          <div ref={buttonWrapperRef} className="banner__cta">
            <ScrollButton targetId={targetId} text={buttonText} />
          </div>
        )}
      </div>
    </section>
  );
}
