import "../assets/styles/navbar.css";
import "../assets/styles/styles.css";
import React, { useState, useEffect } from "react";
import logoTrans from "../assets/images/logo-trans-yellow-white.png";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <header className={`${scroll ? "sticky-navbar" : ""}`}>
      <nav className="nav">
        <div className="">
          <a id="logo" href="/hem">
            <img src={logoTrans} alt="Nickesalltjänst" />
          </a>
        </div>

        <div className={clicked ? "dark-overlay" : "light-overlay"}>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a className="active hover-underline" href="/hem">
                Hem
              </a>
            </li>
            <li>
              <a className="hover-underline" href="/tjanster">
                Tjänster
              </a>
            </li>
            <li>
              <a className="hover-underline" href="/om">
                Om
              </a>
            </li>
            <li>
              <a className="hover-underline" href="/kontakt">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div
          id="mobile"
          onClick={() => {
            handleClick();
          }}
        >
          <i id="bar" className={clicked ? "fas fa-times " : "fas fa-bars"}></i>
        </div>
      </nav>
    </header>
  );
}
