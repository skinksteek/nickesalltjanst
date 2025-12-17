import ContactForm from "../components/contact/ContactForm";
import ScaleIn from "../components/motion/ScaleIn";

export default function Contact() {
  return (
    <div>
      <ScaleIn>
        <ContactForm />
      </ScaleIn>
    </div>
  );
}
