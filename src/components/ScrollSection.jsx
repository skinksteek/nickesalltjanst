import { useInView } from "../hooks/useInView.js";

export function ScrollSection({ title, bread, image, reverse }) {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className={`scroll-section ${inView ? "is-visible" : ""} ${
        reverse ? "reverse" : ""
      }`}
    >
      <div className="scroll-section__image-wrapper">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="scroll-section__image"
        />
      </div>
      <div className="scroll-section__content">
        <h2>{title}</h2>
        <p>{bread}</p>
      </div>
    </section>
  );
}
