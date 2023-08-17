/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";
import * as Linker from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/images/logo.webp";

import PDF from "../../assets/Economics paper.pdf";

const Navbar = () => {
  const [open, setOpen] = useState({ state: "none" });

  function toggle() {
    if (open.state === "block") setOpen({ state: "none" });
    else setOpen({ state: "block" });
  }

  return (
    <header id="topnav" className="defaultscroll sticky tagline-height">
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
            <Link className="navbar-toggle" id="isToggle" onClick={toggle}>
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </Link>
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
              <a
                target={"_blank"}
                href="https://whitepaper.renderverse.io/"
                class="sub-menu-item item_point"
              >
                White-Paper
              </a>
            </li>
            <li>
              <a href={PDF} target={"_blank"} class="sub-menu-item item_point">
                Economics-Paper
              </a>
            </li>
            <li>
              <Link to="/contact" className="sub-menu-item item_point">
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
            <li class="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Docs</a>
              <span class="menu-arrow"></span>
              <ul class="submenu">
                <li>
                  <a
                    target={"_blank"}
                    href="https://whitepaper.renderverse.io/"
                    class="sub-menu-item item_point"
                  >
                    White-Paper
                  </a>
                </li>
                <li>
                  <a
                    href={PDF}
                    target={"_blank"}
                    class="sub-menu-item item_point"
                  >
                    Economics-Paper
                  </a>
                </li>
              </ul>
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
