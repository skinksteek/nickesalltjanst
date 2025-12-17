import { useInView } from "/src/hooks/useInView.js";

export function Stagger({ children }) {
  const { ref, inView } = useInView({ once: true });

  return (
    <div ref={ref} className={`stagger ${inView ? "in-view" : ""}`}>
      {children}
    </div>
  );
}
export default Stagger;
