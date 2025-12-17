import "/src/assets/styles/services.css";
import { data } from "/src/assets/json/data.js";
import { ScrollSection } from "../components/ScrollSection.jsx";
import Button from "../components/Button";
import ScaleIn from "../components/motion/ScaleIn.jsx";
const Services = () => {
  return (
    <section className="services-container">
      <ScaleIn>
        <h2 className="services-heading">
          Vi erbjuder en stor variation av tjänster!
        </h2>
      </ScaleIn>

      <div className="sections">
        {data.map((data, index) => (
          <ScrollSection
            key={data.id}
            title={data.title}
            bread={data.bread}
            image={data.image}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <div className="services-contact">
        <h2>Tveka inte att höra av dig om vi kan stå till tjänst!</h2>
        <Button
          text="Kontakta oss"
          href="/kontakt"
          onClick={() => navigate("/kontakt")}
        />
      </div>
    </section>
  );
};
export default Services;
