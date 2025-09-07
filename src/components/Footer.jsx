/* eslint-disable no-undef */
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-parent">
      <footer className="footer-container">
        <div className="footer-info footer-50">
          <p>
            <strong>Vår vision</strong>
          </p>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer
          </p>
        </div>
        <div className="footer-contact footer-25">
          <p>
            <strong>Kontakta oss</strong>
          </p>
          <p>
            Nickesalltjänst AB
            <br></br>
            Kyrkogatan 12
            <br></br>
            688 30 Storfors
            <br></br>
            <p>
              +46 76-327 71 17
              <br></br>
              alltjanstnicke@hotmail.com
            </p>
          </p>
        </div>
        <div className="footer-follow footer-25">
          <ul>
            <p>
              <strong>Följ oss</strong>
            </p>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <br></br>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100076329215498"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <br></br>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
