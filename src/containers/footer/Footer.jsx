import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className="gpt3__footer-first__section">
        <p className="gradient__text">
          Do you want to step in to the future before others
        </p>
        <div className="gpt3__footer-first__section-button">
          <button type="button">Request Early Access</button>
        </div>
      </div>

      <div className="gpt3__footer-third__section-container">
        <div className="gpt3__footer-second__section">
          <img src={logo} alt="logo" />
          <p>almasrighaith101@gmail.com</p>
        </div>

        <div className="gpt3__footer-third__section">
          <h6>Links</h6>
          <a href="#footer" className="footer-link">
            Overons
          </a>
          <a href="#footer" className="footer-link">
            Social Media
          </a>
          <a href="#footer" className="footer-link">
            Contact
          </a>
        </div>
        <div className="gpt3__footer-fourth__section">
          <h6>Company</h6>
          <a href="#footer" className="footer-link">
            Terms & Conditions
          </a>
          <a href="#footer" className="footer-link">
            Privacy Policy
          </a>
          <a href="#footer" className="footer-link">
            Contact
          </a>
        </div>
        <div className="gpt3__footer-fifth__section">
          <h6>Get in touch</h6>
          <a href="#footer" className="footer-link">
            Crechterwoord K12 182 DK Alknjkcb
          </a>
          <a href="#footer" className="footer-link" tel="+962790702262">
            +962790702262
          </a>
          <a href="#footer" className="footer-link" mailto="almasrighaith101@gmail.com">
            almasrighaith101@gmail.com
          </a>
        </div>
      </div>



      <div className="gpt3__footer-copyrights">
        <p>© 2023 Ghiath AlMasri. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
