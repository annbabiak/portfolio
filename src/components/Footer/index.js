import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <p>
        This site is built with&nbsp;
        <FontAwesomeIcon icon={faHeart} className="footer__icon" /> using React.
      </p>
      <p>
        Сopyright&nbsp;
        <FontAwesomeIcon icon={faCopyright} className="footer__icon" />
        &nbsp;2024 Anna Babiak
      </p>
    </footer>
  );
}

export default Footer;
