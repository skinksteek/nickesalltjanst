import { useInView } from "/src/hooks/useInView.js";
import "./motion.css";

export function Reveal({ children, className = "" }) {
  const { ref, inView } = useInView({ once: true });

  return (
    <div ref={ref} className={`reveal ${inView ? "in-view" : ""} ${className}`}>
      {children}
    </div>
  );
}

export default Reveal;
