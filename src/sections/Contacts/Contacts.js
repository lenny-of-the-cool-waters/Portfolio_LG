import React from "react";
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
              <h2>+254 70012345</h2>
              <h2>+254 75432100</h2>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <img src="/icons/icons8-man-with-mail-50.png" alt="phone" />
            </div>
            <div className="contact-info">
              <h1>E mail</h1>
              <h2>johndoe@gmail.com</h2>
              <h2>johndoe@mail.com</h2>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <img src="/icons/icons8-address-50.png" alt="phone" />
            </div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>Nairobi, Kenya</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
