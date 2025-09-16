import "../assets/styles/navbar.css";
import "../assets/styles/styles.css";
import { useEffect, useState } from "react";
import new_logo from "/public/images/new_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Scroll state (för blur/border)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Markera aktiv länk utifrån path (fallback om du inte kör React Router)
  useEffect(() => {
    const path = window.location.pathname.replace(/^\/+/, "");
    if (path.startsWith("tjanster")) setActive("Tjänster");
    else if (path.startsWith("om")) setActive("Om");
    else if (path.startsWith("kontakt")) setActive("Kontakt");
    else setActive("Hem");
  }, []);

  // Stäng drawer vid resize (t.ex. när man går upp till desktop)
  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav>
        <div className="nav-content">
          <a id="logo" className="nav-logo" href="/">
            {/* Din riktiga logo används här */}
            <img
              src={new_logo}
              alt="Nickes Alltjänst"
              title="Gå till startsidan"
            />
          </a>

          {/* Overlay för att mörklägga bakom menyn på mobil */}
          <div
            className={`mobile-overlay ${open ? "show" : ""}`}
            onClick={() => setOpen(false)}
          />

          <ul id="navbar" className={open ? "active" : ""}>
            <li>
              <a
                className={`hover-underline ${
                  active === "Hem" ? "active" : ""
                }`}
                href="/hem"
              >
                Hem
              </a>
            </li>
            <li>
              <a
                className={`hover-underline ${
                  active === "Tjänster" ? "active" : ""
                }`}
                href="/tjanster"
              >
                Tjänster
              </a>
            </li>
            <li>
              <a
                className={`hover-underline ${active === "Om" ? "active" : ""}`}
                href="/om"
              >
                Om
              </a>
            </li>
            <li>
              <a
                className={`hover-underline ${
                  active === "Kontakt" ? "active" : ""
                }`}
                href="/kontakt"
              >
                Kontakt
              </a>
            </li>
            {/* CTA i menyn på mobil */}
            <li className="cta-mobile">
              <a className="cta" href="tel:+46700000000" aria-label="Ring oss">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.17 9.81 19.78 19.78 0 0 1 .11 1.18 2 2 0 0 1 2.11-.99h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.54 2.64a2 2 0 0 1-.45 2.11L6.1 6.91a16 16 0 0 0 7 7l1.43-1.12a2 2 0 0 1 2.11-.45c.86.24 1.74.42 2.64.54A2 2 0 0 1 22 16.92z"
                    fill="currentColor"
                  />
                </svg>
                Ring oss
              </a>
            </li>
          </ul>

          {/* CTA på desktop */}
          <a
            className="cta cta-desktop"
            href="tel:+46700000000"
            aria-label="Ring oss"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.17 9.81 19.78 19.78 0 0 1 .11 1.18 2 2 0 0 1 2.11-.99h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.54 2.64a2 2 0 0 1-.45 2.11L6.1 6.91a16 16 0 0 0 7 7l1.43-1.12a2 2 0 0 1 2.11-.45c.86.24 1.74.42 2.64.54A2 2 0 0 1 22 16.92z"
                fill="currentColor"
              />
            </svg>
            Ring oss
          </a>

          {/* Mobil-knapp (utan externa ikonspråk) */}
          <div id="mobile">
            <button
              aria-expanded={open}
              aria-controls="navbar"
              aria-label={open ? "Stäng meny" : "Öppna meny"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
