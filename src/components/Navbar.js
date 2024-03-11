import "../assets/styles/navbar.css";
import "../assets/styles/styles.css";
import { Component } from "react";
import React from "react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  /*
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
      console.log(window.scrollY);)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
*/
  render() {
    return (
      <header>
        <nav className="nav">
          <div className="">
            <a id="logo" href="/hem">
              <img
                src={require("../assets/images/logo-trans.png")}
                alt="Nickesalltjänst"
              />
            </a>
          </div>

          <div
            className={this.state.clicked ? "dark-overlay" : "light-overlay"}
          >
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active hover-underline" href="/hem">
                  Hem
                </a>
              </li>
              <li>
                <a className="hover-underline" href="/nyheter">
                  Nyheter
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
              this.handleClick();
            }}
          >
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times " : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
