import { useInView } from "/src/hooks/useInView.js";

export function ScaleIn({ children }) {
  const { ref, inView } = useInView({ once: true });

  return (
    <div ref={ref} className={`scale-in ${inView ? "in-view" : ""}`}>
      {children}
    </div>
  );
}

export default ScaleIn;
