import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Header() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <header className="header">
      <Link
        to="/"
        onClick={() => scroll.scrollToTop()}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="logo"
      >
        Anna Babiak
      </Link>
      <input
        type="checkbox"
        id="check"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="check" className="header_icons">
        <FontAwesomeIcon icon={faBars} id="menu__icon" />
        <FontAwesomeIcon icon={faXmark} id="close__icon" />
      </label>
      <nav className={`navbar ${isChecked ? "active" : ""}`}>
        {/* <a href="#about" style={{ "--i": 0 }}>
          About
        </a> */}
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ "--i": "0" }}
        >
          About
        </Link>
        {/* <a href="#projects" style={{ "--i": 1 }}>
          Projects
        </a> */}
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ "--i": "1" }}
        >
          Projects
        </Link>
        {/* <a href="#contacts" style={{ "--i": 2 }}>
          Contacts
        </a> */}
        <Link
          to="contacts"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ "--i": "2" }}
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
