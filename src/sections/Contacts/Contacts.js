import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import './Contacts.css';

const Contacts = () => {
  return (
    <section id="contacts">
      <div className="contact container">
        <div className="contacts-header">
          <h1 className="section-title">
            Contact <span>info</span>
          </h1>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <div className="icon">
              <img src="/icons/icons8-phone-50.png" alt="phone" />
            </div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>+254 705761133</h2>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <img src="/icons/icons8-man-with-mail-50.png" alt="email" />
            </div>
            <div className="contact-info">
              <h1>E mail</h1>
              <h2>lennygith@gmail.com</h2>
              {/* <h2>johndoe@mail.com</h2> */}
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <img src="/icons/icons8-address-50.png" alt="socials" />
            </div>
            <div className="contact-info">
              <h1>Socials</h1>
              <h2><a className="social-link" href="https://www.linkedin.com/in/lenny-githenya/">LinkedIn</a> <FontAwesomeIcon icon={faLinkedin} /></h2>
              <h2><a className="social-link" href="https://github.com/lenny-of-the-cool-waters">Github</a> <FontAwesomeIcon icon={faGithub} /></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
