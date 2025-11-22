import "../assets/styles/footer.css";
import logo from "/src/images/new_logo.png";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <section className="footer__leftSection">
          <div className="footer__logoSection">
            <a
              href="/"
              className="footer__logoLink"
              aria-label="Gå till startsidan"
            >
              <img
                className="footer__logo"
                src={logo}
                alt="Nickes Alltjänst AB"
              />
            </a>
          </div>
          <div className="footer__brand" aria-labelledby="footer-brand-title">
            <h2 id="footer-brand-title" className="footer__title">
              Det här är Nickesalltjänst
            </h2>
            <p className="footer__description">
              Vi erbjuder ett brett utbud av tjänster inom mark- och byggarbeten
              – allt från vatten och avlopp, dränering och plattsättning till
              plantering och borttagning av häckar och buskar. Vi hjälper även
              till med mindre husgrunder, grus- och krantransporter, skräp- och
              riscontainer, samt bilreparationer, däckförsäljning och olika
              snickeri- och byggprojekt.
            </p>
          </div>
        </section>
        <section
          className="footer__contact"
          aria-labelledby="footer-contact-title"
        >
          <h2 className="footer__title">Nickes Alltjänst AB</h2>
          <address className="footer__address">
            <p>
              Kyrkogatan 12
              <br />
              688 30 Storfors
            </p>
            <p>
              Tel:{" "}
              <a href="tel:+46763277117" className="footer__link">
                +46 76-327 71 17
              </a>
            </p>
            <p>
              E-post:{" "}
              <a href="mailto:info@nickesalltjanst.se" className="footer__link">
                info@nickesalltjanst.se
              </a>
            </p>
          </address>
        </section>
      </div>

      <div className="footer__bottom">
        <small className="footer__copyright">
          © {new Date().getFullYear()} Nickes Alltjänst AB
        </small>
      </div>
    </footer>
  );
};

export default Footer;
