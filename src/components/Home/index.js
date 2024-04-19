import React from "react";
import "./style.css";
import image_1 from "../../image/image_1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main className="main">
      <div className="main__text">
        <h1 className="welcome">WELCOME!</h1>
        <h2 className="whoIAm">I Am Anna Babiak</h2>
        <p className="introduction">
          My goal is to become a front-end developer, and I have created a
          portfolio to showcase my projects. I would be grateful if you could
          take a look at it and provide me with your feedback. Your advice will
          help me make this portfolio even better. Thank you for taking the time
          to review it!
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/anna-babiak-8284b2300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="font_awesome_icon" />
          </a>
          <a
            href="https://github.com/annbabiak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="font_awesome_icon" />
          </a>
          <a
            href="mailto:babiakanna18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="font_awesome_icon" />
          </a>
          <a
            href="https://t.me/Anna_Babiak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTelegram} className="font_awesome_icon" />
          </a>
        </div>
      </div>
      <div className="main__image">
        <img src={image_1} alt="Main" />
      </div>
    </main>
  );
}

export default Home;
