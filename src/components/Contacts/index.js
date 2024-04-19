import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "⚠️ The form is temporarily out of service. Sorry for the inconvenience."
    );
  };

  return (
    <section className="contacts" id="contacts">
      <div className="left__side">
        <h3>Contacts</h3>
        <p>
          Please share your comments and thoughts about this portfolio here, and
          remember to maintain a positive tone.
        </p>
        <div className="contact__information">
          <div className="info">
            <a
              href="https://www.google.com/maps?rlz=1C5CHFA_enUA1008UA1008&output=search&q=lviv&entry=mc&sa=X&ved=2ahUKEwi8t5PngOv_AhVM6CoKHTnTAHMQ0pQJegQICxAB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contacts__icons">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="contact__icon"
                />
              </div>
              <div className="contact__text">
                <p>Address</p>
                <p>Lviv, Ukraine</p>
              </div>
            </a>
          </div>

          <div className="info">
            <a
              href="mailto:babiakanna18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contacts__icons">
                <FontAwesomeIcon icon={faEnvelope} className="contact__icon" />
              </div>
              <div className="contact__text">
                <p>Email Address</p>
                <p>babiakanna18@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="info">
            <a
              href="tel:+380969697711"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contacts__icons">
                <FontAwesomeIcon icon={faPhone} className="contact__icon" />
              </div>
              <div className="contact__text">
                <p>Phone Number</p>
                <p>+380969697711</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="right__side">
        <form onSubmit={handleSubmit}>
          <h4>Message me</h4>
          <div className="row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="on"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="on"
            />
          </div>
          <div className="row">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              autoComplete="off"
            />
          </div>
          <div className="row">
            <textarea
              id="message"
              name="message"
              placeholder="Message..."
              autoComplete="off"
            ></textarea>
          </div>
          <div className="row">
            <button type="submit" className="send__button">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
