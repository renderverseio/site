/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-scroll";
import * as Linker from "react-router-dom";
import PDF from "../../assets/Economics paper.pdf";
import { useState } from "react";
import Logo from "../../assets/images/logo.webp";
import PDF_1 from "../../assets/Pitch Deck.pdf";

const Navbar = () => {
  const [open, setOpen] = useState({ state: "none" });

  function toggle() {
    if (open.state === "block") setOpen({ state: "none" });
    else setOpen({ state: "block" });
  }

  return (
    <header
      style={{ paddingTop: 0 }}
      id="topnav"
      className="defaultscroll sticky tagline-height"
    >
      <div className="container">
        <Linker.Link to="/" className="logo" style={{ display: "flex" }}>
          <img
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            style={{ transform: "translateY(.7rem) translateX(-.6rem)" }}
          />
          <span>Renderverse</span>
        </Linker.Link>
        <div className="menu-extras">
          <div className="menu-item">
            <a onClick={toggle} className="navbar-toggle">
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
          </div>
        </div>
        <div style={{ display: open.state, padding: "8rem 0" }}>
          <ul className="navigation-menu nav-right nav-light">
            <li>
              <Link
                onClick={toggle}
                to="/"
                className="sub-menu-item item_point"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggle}
                to="/mission"
                className="sub-menu-item item_point"
              >
                Mission
              </Link>
            </li>
            <li>
              <Link
                onClick={toggle}
                to="/eco-system"
                className="sub-menu-item item_point"
              >
                Eco System
              </Link>
            </li>
            <li>
              <Linker.Link
                onClick={toggle}
                to="/news"
                className="sub-menu-item item_point"
              >
                Blog
              </Linker.Link>
            </li>
            <li>
              <a
                target={"_blank"}
                href="https://whitepaper.renderverse.io/"
                className="sub-menu-item item_point"
              >
                White-Paper
              </a>
            </li>
            <li>
              <a
                href={PDF}
                target={"_blank"}
                className="sub-menu-item item_point"
              >
                Economics-Paper
              </a>
            </li>

            <li>
              <a
                target={"_blank"}
                href={PDF_1}
                className="sub-menu-item item_point"
              >
                Pitch-Deck
              </a>
            </li>

            <li>
              <Link
                onClick={toggle}
                to="/roadmap"
                className="sub-menu-item item_point"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                onClick={toggle}
                to="/team"
                className="sub-menu-item item_point"
              >
                Team
              </Link>
            </li>

            <li>
              <Link
                onClick={toggle}
                to="/contact"
                className="sub-menu-item item_point"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div id="navigation">
          <ul className="navigation-menu nav-right nav-light">
            <li>
              <Link to="/" className="sub-menu-item item_point">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mission" className="sub-menu-item item_point">
                Mission
              </Link>
            </li>
            <li>
              <Link to="/eco-system" className="sub-menu-item item_point">
                Eco System
              </Link>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a>Docs</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a
                    target={"_blank"}
                    href="https://whitepaper.renderverse.io/"
                    className="sub-menu-item item_point"
                  >
                    White-Paper
                  </a>
                </li>
                <li>
                  <a
                    href={PDF}
                    target={"_blank"}
                    className="sub-menu-item item_point"
                  >
                    Economics-Paper
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    href={PDF_1}
                    className="sub-menu-item item_point"
                  >
                    Pitch-Deck
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/roadmap" className="sub-menu-item item_point">
                Roadmap
              </Link>
            </li>
            <li>
              <Link to="/team" className="sub-menu-item item_point">
                Team
              </Link>
            </li>
            <li>
              <Linker.Link to="/news" className="sub-menu-item item_point">
                Blog
              </Linker.Link>
            </li>
            <li>
              <Link to="/contact" className="sub-menu-item item_point">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
