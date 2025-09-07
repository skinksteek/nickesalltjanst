import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";

export default function Contact() {
  return (
    <div>
      <Hero
        text="Kontakta oss!"
        bread="Här hittar du kontaktinformation till oss på Nickesalltjänst. Är du osäker på vem du behöver komma i kontakt med är du välkommen att ringa växeln."
      />
      <ContactForm />
    </div>
  );
}
